import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hphfdyrblnycurtfnvgs.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwaGZkeXJibG55Y3VydGZudmdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTE4NDcyNjcsImV4cCI6MTk2NzQyMzI2N30.Py5G5TrrbDKVmHKVDlcWjVeST0qvBgK1XlZxFoiRfI8";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
