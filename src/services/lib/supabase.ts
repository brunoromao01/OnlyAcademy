import { AppState } from 'react-native'
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { passwordapi, url } from '../auth';

const supabaseUrl = "https://wblrwwgwmzmjwmimdjpt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndibHJ3d2d3bXptandtaW1kanB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgzMjE2NzksImV4cCI6MjAzMzg5NzY3OX0.EQjJerdURvsaCLKbjAsmemxoojQkKB9erwZpqQajw64"
console.log(supabaseUrl)
console.log(supabaseAnonKey)

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {

  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})