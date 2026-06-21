// this is a: path param (of artist)
import supabase from "@/app/libs/supabase"
// import Image from "next/image"
// // เนื่องจาก next มีความปลอดภัย ต้องมีการ set permission allow fetch image ด้านนอก ตอนนี้ใช้ img ก่อน

export default async function Artist( {params} ) {
    const p = await params;
    // console.log(p) // .id เพราะโฟลเดอร์ชื่อ [id] → param key คือ id
    
    const {data, error} = await supabase
    .from('artists')
    .select('')
    .eq('id', p.id)
    .limit(1)
    .single() // ใช้แทนกับ limit ได้

    const artist = data;
    console.log(artist)
    return (
        <div>
            {/* Hello This param is {p.id}  */}
            <img
                className="w-48"
                src={artist.image}
                alt={artist.name}
            />
        </div>
    )
}