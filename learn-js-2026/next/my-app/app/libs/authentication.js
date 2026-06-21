"use client";
import supabase from "./supabase"

// ไม่ใส่ "use server" — ไฟล์นี้ถูก import โดย Client Component
export async function signInWithGithub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: window.location.origin, // กลับมาที่หน้าเดิมหลัง login
    }
  })
  return { data, error }
}
