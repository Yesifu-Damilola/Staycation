import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hznsoqxajsauldubfukj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh6bnNvcXhhanNhdWxkdWJmdWtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI3ODgxNzksImV4cCI6MjA0ODM2NDE3OX0.vchRyVTKLVOeOiFYEZOoE12tpf3iqx8L0ZpfcJjmoTU";
export const supabase = createClient(supabaseUrl, supabaseKey);

