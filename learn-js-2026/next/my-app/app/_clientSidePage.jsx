"use client";
// ส่งผลต่อเรื่อง env ด้วย เพราะ client ใช้ได้กับ NEXT_PUBLIC เท่านั้น
// และเราต้องคิดเรื่องความปลอดภัยด้วย คือรันฝั่ง server จะได้ไม่ต้อง​โดนเขา console log ตัวแปร

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Link ใช้แทน <a> เพื่อ navigate แบบไม่ reload หน้า (SPA)
import Card from "./components/Card";
import supabase from "./libs/supabase";

export default function Home() {
  // ท่าแบบ client side rendering
  // ต่างจาก server side ตรงที่:
  // - ต้องใช้ useState เก็บข้อมูล
  // - ต้องใช้ useEffect เพื่อ fetch ตอน component โหลด
  // - ไม่ใช้ async function (ใช้ไม่ได้ใน client component)
  // - data จะยังเป็น [] ตอนแรก แล้วค่อยมีข้อมูลหลัง fetch เสร็จ (user เห็นหน้าเปล่าแว้บนึง)
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect → รันหลัง component mount (บน browser)
  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from("songs").select("*");
      if (data) {
        setArtists(data); // อัพเดท state → component re-render แสดงข้อมูล
      }
      setLoading(false);
    }
    fetchData();
  }, []); // [] = รันครั้งเดียวตอน mount

  return (
    <>
      {/* แสดงสถานะ loading */}
      {loading ? (
        <p className="p-8 text-gray-500">กำลังโหลด...</p>
      ) : (
        <pre className="bg-gray-900 text-green-400 text-sm rounded p-4 m-4 overflow-auto">
          {JSON.stringify(artists, null, 2)}
        </pre>
      )}

      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
        <Image //นิยใช้ tag นี้มากว่า img เพราะรองรับ Lazy loading
          // ไฟล์ใน public/ → เข้าถึงได้ผ่าน / โดยตรง ไม่ต้องใส่ root path
          // or fixed size
          // width={3840}
          // height="2160"
          src="/danmachi.jpg" // มี 3 แบบw webp, png, jpg | ไฟล์ใน folder public/ → เข้าถึงด้วย / โดยตรง
          alt="Danmachi Cover"
          fill // เติมให้เต็ม container (ต้องมี parent เป็น relative)
          className="object-cover" // crop ให้พอดี ไม่บิด
          priority // โหลดทันที ไม่ lazy load (เหมาะกับ hero image)
        />
      </div>

      {/* Card List */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">รายการ</h2>

        {/* Card รับ children → ปุ่มที่เขียนระหว่าง <Card>...</Card> จะถูกส่งเข้าไปแสดงใน component */}
        <Card
          imgUrl="/1.jpg"
          title="Danmachi ss1"
          description="Is It Wrong to Try to Pick Up Girls in a Dungeon?"
        >
          {/* ปุ่มบน: ใช้ Link → navigate แบบ client-side (ไม่ reload หน้า, เร็ว, pre-fetch) */}
          <Link href="/products">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
              ดูเพิ่มเติม (Link)
            </button>
          </Link>
          {/* ปุ่มล่าง: ใช้ <a> → navigate แบบ traditional (reload ทั้งหน้า, ช้ากว่า, ไม่ pre-fetch) */}
          <a href="/products">
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold px-6 py-2 rounded-lg">
              ดูเพิ่มเติม (a tag)
            </button>
          </a>
        </Card>

        <Card
          imgUrl="/cover.jpg"
          title="Danmachi ss2"
          description="การผจญภัยของเบลในชั้นที่ลึกขึ้น"
        >
          {/* Link: กดแล้วสังเกตว่าหน้าไม่กระพริบ */}
          <Link href="/products">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
              ดูเพิ่มเติม (Link)
            </button>
          </Link>
          {/* <a>: กดแล้วสังเกตว่าหน้ากระพริบ/reload ใหม่ทั้งหน้า */}
          <a href="/products">
            <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-semibold px-6 py-2 rounded-lg">
              ดูเพิ่มเติม (a tag)
            </button>
          </a>
        </Card>
      </div>
    </>
  );
}
