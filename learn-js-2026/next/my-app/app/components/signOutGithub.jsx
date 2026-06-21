"use client";
// signInGithub — component ที่รวม logic login + ใช้ปุ่ม LoginButton
import supabase from "@/app/libs/supabase";
import Button from "./Button";

export default function SignInGithub() {
    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut()
    }

    return (
        // ใช้ Button เป็นปุ่ม + ส่ง handleLogout เป็น onClick
        <Button onClick={handleLogout}>
            Logout Github
        </Button>
    )
}
