"use client";
import supabase from "@/app/libs/supabase";

// styles ตั้งตรงนี้ไปก่อน (import styles.js อาจมีปัญหากับ client/server boundary)
const btnDark = "bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow";

export default function LoginButton() {
    // เขียน function ตรงๆ ในไฟล์ client component เลย — ไม่ import ข้ามไฟล์
    const handleLogin = async () => {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: window.location.origin,
            }
        });
        if (error) console.error("Login error:", error);
    }

    return (
        <button
            onClick={handleLogin}
            className={btnDark}
        >
            Login with Github
        </button>
    )
}
