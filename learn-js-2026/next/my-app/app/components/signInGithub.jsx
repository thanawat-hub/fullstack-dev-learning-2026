"use client";
// signInGithub — component ที่รวม logic login + ใช้ปุ่ม LoginButton
import supabase from "@/app/libs/supabase";
import Button from "./Button";

export default function SignInGithub() {
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
        // ใช้ LoginButton เป็นปุ่ม + ส่ง handleLogin เป็น onClick
        <Button onClick={handleLogin}>
            Login with Github
        </Button>
    )
}
