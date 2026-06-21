"use server";
import supabase from "@/app/libs/supabase"
import Card from "@/app/components/Card"
import Link from "next/link"

export default async function Songs () {
    let songs = []
    const {data} = await supabase.from('songs').select('*')
    songs = [...data];
    return (
        <div>
            <h1 className="text-3xl font-bold my-4 text-center"> Songs </h1>
            <div className="grid grid-cols-1">
                {
                    // console.log(data)
                    songs.map(data => (
                        <Card
                            key={data.id}
                            title={data.title}
                            imgUrl={data.cover_image}
                            description={`Track ${data.track_number} • ${data.duration_seconds}s`}
                        >
                            {/* children — ปุ่มกดไป /songs/[id] */}
                            <Link href={`/songs/${data.id}`}>
                                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
                                    ฟังเพลง
                                </button>
                            </Link>
                        </Card>
                    ))
                }
            </div>

        </div>
    )
}