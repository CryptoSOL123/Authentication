import { createClient } from "@supabase/supabase-js";

// Replace these with your Supabase credentials
const supabaseUrl = "https://fmfkhyoheujcttknffow.supabase.co";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
