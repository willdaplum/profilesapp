// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://trtwiifvanlqykdyesbr.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRydHdpaWZ2YW5scXlrZHllc2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyNjI5MDIsImV4cCI6MjA2NzgzODkwMn0.Zqvyk47y2zEpk_i4jSDHbe5LauwoDDUc2PtAmWNnlWA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
