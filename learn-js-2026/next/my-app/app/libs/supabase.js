import { createClient } from "@supabase/supabase-js"

// env.local      ← ✅ ต้องอยู่ที่ root ของ project (ข้าง package.json)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase