"use server";
import Card from "@/app/components/Card"
import Link from "next/link"
import artistModel from "../libs/models/artist";

// ตั้งตัวแปร style ไว้ด้านบน — แก้ที่เดียว ใช้ได้ทุกปุ่ม
const styles = {
    btnPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow",
}

export default async function Artists () {
    let artists = []
    const {data, error} = await artistModel.getAll();
    artists = [...data];
    return (
        <div>
            <h1 className="text-3xl font-bold my-4 text-center"> Artists </h1>
            
            {/* ปุ่ม Create Artist */}
            <div className="flex justify-end px-4 mb-4">
                <Link href="/artists/create">
                    <button className={styles.btnPrimary}>
                        + Create Artist
                    </button>
                </Link>
            </div>

            <div className="grid grid-cols-1">
                {
                    artists.map(data => (
                        <Card
                            key={data.id}
                            title={data.name}
                            imgUrl={data.image}
                            description={data.genre}
                        >
                            {/* children — ปุ่มกดไป /artists/[id] */}
                            <Link href={`/artists/${data.id}`}>
                                <button className={styles.btnPrimary}>
                                    ดูรายละเอียด
                                </button>
                            </Link>
                        </Card>
                    ))
                }
            </div>

        </div>
    )
}