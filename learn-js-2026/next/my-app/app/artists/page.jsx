"use server";
import supabase from "@/app/libs/supabase"
import Card from "@/app/components/Card"
import Link from "next/link"

export default async function Artists () {
    let artists = []
    const {data} = await supabase.from('songs').select('*')
    artists = [...data];
    return (
    // <pre>
    //     {JSON.stringify(data, null, 2)}
    // </pre>
        <div>
            <h1 className="text-3xl font-bold my-4 text-center"> Artists </h1>
            <div className="grid grid-cols-1">
                {
                    // console.log(data)
                    artists.map(data => (
                        <Card
                            key={data.id}
                            title={data.title}
                            imgUrl={data.cover_image}
                            description={`Track ${data.track_number} • ${data.duration_seconds}s`}
                        >
                            {/* children — ปุ่มกดไป /artists/[id] */}
                            <Link href={`/artists/${data.id}`}>
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
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