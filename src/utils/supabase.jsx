import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  // import.meta.env.VITE_SUPABASE_URL,
  // import.meta.env.VITE_SUPABASE_ANON_KEY
  "https://znpznaaskoqtznmttcao.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpucHpuYWFza29xdHpubXR0Y2FvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5NDE5MTAsImV4cCI6MjAzNTUxNzkxMH0.Kw31mHCkQxYV71J9_m4Vp_dCoFLIJQPre3QRlW9N3HI"
);
