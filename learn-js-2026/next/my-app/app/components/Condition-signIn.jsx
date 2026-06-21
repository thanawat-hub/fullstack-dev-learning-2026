"use client";
import SignInGithub from "./signInGithub"
import SignOutGithub from "./signOutGithub"
import { getUser } from "../libs/authentication"
import { useState, useEffect } from "react";

// เงื่อนไข: ยังไม่ login → แสดง SignIn / login แล้ว → แสดง SignOut
export default function SignConditionGithub() {
    const [stateUser, setStateUser] = useState(null)

    // ดึง user ตอน component mount
    useEffect(() => {
        getUser().then(user => {
            setStateUser(user) // ถ้า login แล้ว = มี user, ยังไม่ login = null
        })
    }) // ถ้าใส่ },[]) แปลว่า react จับตาดูและ รันครั้งเดียว => ถ้าใส่ตัวนี้ด้วยแปลว่า ปุ่มจะไม่แสดงผลเพราะรันครั้งเดียว ต้องปล่อยว่างแบบไม่มีกล่อง array

    return (
        <div className="flex flex-col items-center gap-4 my-4">
            {/* ถ้า stateUser เป็น null = ยังไม่ login → แสดงปุ่ม Sign In */}
            {/* ถ้า stateUser มีค่า = login แล้ว → แสดงปุ่ม Sign Out โดยตัว react life cycle จะไปยึดตาม useEffect*/}
            {!stateUser ? (
                <SignInGithub />
            ) : (
                <SignOutGithub />
            )}
        <pre className="text-xs bg-gray-100 p-2">{JSON.stringify(stateUser, null, 2)}</pre>

        </div>  
    )
}
