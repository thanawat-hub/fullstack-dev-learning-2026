// this is a: path param (of artist)
// import Image from "next/image"
// // เนื่องจาก next มีความปลอดภัย ต้องมีการ set permission allow fetch image ด้านนอก ตอนนี้ใช้ img ก่อน
import artistModel from "../../libs/models/artist";
import { notFound, redirect } from 'next/navigation'

// notFound() → แสดงหน้า 404 (ไม่เจอข้อมูล)
// redirect('/path') → เปลี่ยนหน้าไปที่ path นั้น (เหมือนกด link ให้อัตโนมัติ)

export default async function Artist( {params} ) {
    const p = await params;

    // ถ้าไม่มี id → redirect กลับไปหน้ารายการ artists
    if (!p.id) {
        redirect(`/artists`)
        // redirect จะหยุด function ทันที ไม่รันต่อ
    }

    const {data, error} = await artistModel.getId(p.id);

    // ถ้า query แล้วไม่เจอข้อมูล → แสดงหน้า 404
    if (!data) {
        notFound()
        // Next.js จะแสดงหน้า not-found.jsx (ถ้ามี) หรือ default 404
    }

    const artist = data;
    return (
        <div>
            <img
                className="w-48"
                src={artist.image}
                alt={artist.name}
            />
            <h2>{artist.name}</h2>
        </div>
    )
}