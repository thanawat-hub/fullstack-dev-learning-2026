"use client";
import { useState, useEffect } from "react";
import { getUser } from "../libs/authentication";

export default function UserProfile() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser().then(u => {
            setUser(u) // ถ้า login แล้ว = มี user, ยังไม่ login = null
        })
    }, [])

    // ยังไม่ login → ไม่แสดงอะไร
    if (!user) return null

    // login แล้ว → แสดง avatar + ชื่อ
    return (
        <div className="flex items-center gap-2">
            <img
                src={user.user_metadata.avatar_url}
                alt={user.user_metadata.full_name}
                style={{ width: '32px', height: '32px' }} // ใช้ style แทน Tailwind class — inline style มี priority สูงสุดจะถูก override ไม่ได้
                className="rounded-full object-cover border-2 border-slate-600"
            />
            {/* ซ่อนชื่อบนจอเล็ก แสดงเฉพาะจอ md ขึ้นไป */}
            <span className="hidden md:inline text-sm text-white">
                {user.user_metadata.full_name}
            </span>
        </div>
    )
}
