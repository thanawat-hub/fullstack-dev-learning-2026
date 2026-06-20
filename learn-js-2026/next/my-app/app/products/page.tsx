import Image from "next/image";


export default function Home() {
  return (
    <div>
    <h1> Welcome to Home Page </h1>
    {/* <img src="/images/cover.png" */}
    <Image //นิยใช้ tag นี้มากว่า img เพราะรองรับ Lazy loading 
      // ไฟล์ใน public/ → เข้าถึงได้ผ่าน / โดยตรง ไม่ต้องใส่ root path
      src="/danmachi.jpg" // มี 3 แบบw webp, png, jpg
      alt="Danmachi Cover"
      fill  // เติมให้เต็ม container
      // or fixed size
      // width={3840}
      // height="2160"
      className="object-cover"
      priority
      />
    </div>
  );
}
