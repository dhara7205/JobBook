import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'project_url';
const supabaseKey = 'aon_key';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
