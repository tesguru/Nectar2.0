import { createClient } from '@supabase/supabase-js';
import AsyncStorage from "@react-native-async-storage/async-storage";

export const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL || "https://perojosbmmoiibqyotyq.supabase.co",
  process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcm9qb3NibW1vaWlicXlvdHlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1MzcwMTIsImV4cCI6MjA3MjExMzAxMn0.l-a5JehHoz9I-lKYkN2-quT1_CFlWI-j0l33YkNSgqM",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  })