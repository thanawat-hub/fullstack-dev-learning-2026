
import Image from "next/image";
import Link from "next/link"; // Link ใช้แทน <a> เพื่อ navigate แบบไม่ reload หน้า (SPA)
import Card from "./components/Card";
import supabase from "./libs/supabase"

export default async function Home() {
  // ท่าแบบ server side redering
  let artists = []
  const {data} = await supabase.from('songs').select('*')
  console.log(data)
  artists = [...data];
  
  return (
    <>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
      {/* Hero Section */}
      <div className="relative w-full h-[400px]">
      <Image //นิยใช้ tag นี้มากว่า img เพราะรองรับ Lazy loading 
        // ไฟล์ใน public/ → เข้าถึงได้ผ่าน / โดยตรง ไม่ต้องใส่ root path
        // or fixed size
        // width={3840}
        // height="2160"
        src="/danmachi.jpg"  // มี 3 แบบw webp, png, jpg | ไฟล์ใน folder public/ → เข้าถึงด้วย / โดยตรง
        alt="Danmachi Cover"
        fill  // เติมให้เต็ม container (ต้องมี parent เป็น relative)
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
