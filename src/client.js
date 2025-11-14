import { createClient } from '@supabase/supabase-js'

const URL = 'https://twdaklpysoyfwspiigyh.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3ZGFrbHB5c295ZndzcGlpZ3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMwNjEzNzcsImV4cCI6MjA3ODYzNzM3N30.T4Z8LA4d8PiIxh_cnY36rgGdpeDWjb99IqZ3Q_0nJH4'
export const supabase = createClient(URL, API_KEY)