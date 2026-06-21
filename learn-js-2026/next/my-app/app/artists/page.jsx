"use server";
import Card from "@/app/components/Card"
import Link from "next/link"
import artistModel from "../libs/models/artist";

export default async function Artists () {
    let artists = []
    const {data, error} = await artistModel.getAll();
    artists = [...data];
    console.log(artists)
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
                            title={data.name}
                            imgUrl={data.image}
                            description={`Track ${data.genre}`}
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