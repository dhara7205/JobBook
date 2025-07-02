# 🧾 Job Tracker – Version 1

A lightweight job tracking tool built using a browser extension + Supabase backend to help job seekers keep track of applications efficiently.

---

## ✅ Features (Version 1)

- 🔐 **Authentication via Supabase**  
  Users can sign up or log in securely to store and view their job application data.

- 📋 **Job Table in Supabase**  
  A table stores job details such as title, company, description, and application URL.

- ➕ **Manual Job Entry**  
  Add job details manually via the UI.

- 🧽 **Insert and Delete Support**  
  Users can add or delete job records as needed (with proper row-level security policies in place).

---

## 🛣️ Roadmap (Upcoming Features)

1. 🏷 **Status Column with Dropdown**  
   - Options: `Applied`, `Under Consideration`, `Interviewing`, `Rejected`, `Offer`, etc.

2. ⚡ **Autofill Job Details from Current Tab**  
   - Auto-scrape title, company, description, and URL from sites like LinkedIn and Indeed.

3. 📤 **Export to Google Sheet**  
   - One-click export of job tracking data to a connected Google Sheet.

4. ✏️ **Update/Edit Support**  
   - Users will be able to update any field (status, notes, etc.) after creation.

5. 📩 **Automatic Status Update via Gmail**  
   - Integrate Gmail API to track responses and auto-update job statuses accordingly.

---

## 🔧 Tech Stack

- **Frontend:** Browser Extension (JavaScript/HTML/CSS)
- **Backend:** Supabase (Database + Auth)
- **Storage:** Supabase Tables
- **Planned Integrations:** Gmail API, Google Sheets API


---

## 🚀 Getting Started

1. Clone the repository  
   `git clone https://github.com/your-username/job-tracker.git`

2. Install dependencies (if any)  
   `npm install`

3. Add Supabase credentials in supabase.js file
   

4. Load the extension in your browser  
   - Open Chrome → Extensions → Load Unpacked → Select the `extension/` folder

5. Run the app and log in using Supabase Auth

---

## 🛡️ Security Notes

- Do **not** commit `.env` or Supabase API keys
- Use Supabase Row Level Security (RLS) policies to ensure user-specific access

---

## 🧠 Contributing

If you'd like to help add any roadmap features, feel free to fork and open a PR!

---



