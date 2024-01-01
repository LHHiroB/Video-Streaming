import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tdhmygsmxlgrbrfejpjq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkaG15Z3NteGxncmJyZmVqcGpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDIxMjg5NzgsImV4cCI6MjAxNzcwNDk3OH0.9HHvtxbSs8f9pls9Mej8xmd8Yh6x2sAIyRgHkpJlJmI";
const supabase = createClient(supabaseUrl, supabaseKey);
console.log(supabase);
export default supabase;