import { createClient } from '@supabase/supabase-js'

const URL = 'https://cgxuubqbguxbytnagvce.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNneHV1YnFiZ3V4Ynl0bmFndmNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwOTgwMjUsImV4cCI6MjA3ODY3NDAyNX0.cVhIfm5fFP_bXkjkxPW5FYYoRD8BdbnyapR9CqLb5A8'
export const supabase = createClient(URL, API_KEY)