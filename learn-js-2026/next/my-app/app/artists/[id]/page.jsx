// this is a: path param (of artist)
// import Image from "next/image"
// // เนื่องจาก next มีความปลอดภัย ต้องมีการ set permission allow fetch image ด้านนอก ตอนนี้ใช้ img ก่อน
import artistModel from "../../libs/models/artist";

export default async function Artist( {params} ) {
    const p = await params;
    // console.log(p) // .id เพราะโฟลเดอร์ชื่อ [id] → param key คือ id
    
    const {data, error} = await artistModel.getId(p.id);

    const artist = data;
    // console.log(artist)
    return (
        <div>
            {/* Hello This param is {p.id}  */}
            <img
                className="w-48"
                src={artist.image}
                alt={artist.name}
            />
            {/* <h2> {artist.name} </h2> */}
        </div>
    )
}