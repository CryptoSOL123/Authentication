import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase credentials
const supabaseUrl = "https://fmfkhyoheujcttknffow.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZtZmtoeW9oZXVqY3R0a25mZm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc0MTM1NTMsImV4cCI6MjA0Mjk4OTU1M30.Gz99WpgHMuUhF8PSQ3bavAJLecBsVE56Xzaqfd_ruew"; // Supabase anonymous key

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
