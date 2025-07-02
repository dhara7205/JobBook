import supabase from './supabase.js';

const authSection = document.getElementById('authSection');
const appSection = document.getElementById('appSection');
const userEmailSpan = document.getElementById('userEmail');
const logoutBtn = document.getElementById('logoutBtn');

document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;

  const { error } = await supabase.auth.signUp({ email, password });
  if (error) alert('Signup error: ' + error.message);
  else alert('Signup successful! Please login.');
});

document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) alert('Login error: ' + error.message);
  else setUser(data.user);
});

logoutBtn.addEventListener('click', async () => {
  await supabase.auth.signOut();
  setUser(null);
});

document.getElementById('jobForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    alert('Please login first.');
    return;
  }

  const job = {
    title: document.getElementById('title').value,
    company: document.getElementById('company').value,
    description: document.getElementById('description').value,
    url: document.getElementById('url').value,
    user_id: user.id,
  };

  const { error } = await supabase.from('jobs').insert([job]);
  if (error) alert('Error saving job: ' + error.message);
  else {
    document.getElementById('jobForm').reset();
    loadJobs();
  }
});

function setUser(user) {
  if (user) {
    authSection.style.display = 'none';
    appSection.style.display = 'block';
    userEmailSpan.textContent = user.email;
    loadJobs();
  } else {
    authSection.style.display = 'block';
    appSection.style.display = 'none';
    userEmailSpan.textContent = '';
  }
}

async function loadJobs() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;

  const { data: jobs, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error loading jobs:', error);
    return;
  }

  const tbody = document.querySelector('#jobTable tbody');
  tbody.innerHTML = '';

  jobs.forEach(job => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${job.title}</td>
      <td>${job.company}</td>
      <td>${job.description || '-'}</td>
      <td><a href="${job.url}" target="_blank">Link</a></td>
      <td><button data-id="${job.id}">❌</button></td>
    `;

    row.querySelector('button').addEventListener('click', async () => {
      await supabase.from('jobs').delete().eq('id', job.id);
      loadJobs();
    });

    tbody.appendChild(row);
  });
}

// On load, check if user session exists and update UI
(async () => {
  const { data } = await supabase.auth.getSession();
  setUser(data.session?.user ?? null);
})();
