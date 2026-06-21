"use client";
// LoginButton — ปุ่ม reusable ที่รับ onClick และ label จากข้างนอก
// ใช้ได้กับทุก action ไม่จำกัดแค่ login

const btnDark = "bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-lg shadow";

export default function Button({ onClick, children }) {
    return (
        <button
            onClick={onClick}
            className={btnDark}
        >
            {children}
        </button>
    )
}
