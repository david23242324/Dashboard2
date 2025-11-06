import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://oskupoxmbgarymoprimd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9za3Vwb3htYmdhcnltb3ByaW1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI0NDU4NzQsImV4cCI6MjA3ODAyMTg3NH0.FXMnv7wPs4TS4O-6kew1Uygulo445bJFqaS-nHFWXAs';
export const supabase = createClient(supabaseUrl, supabaseKey);
