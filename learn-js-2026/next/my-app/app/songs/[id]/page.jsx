// there're song detail
// Add Video Youtube panel

import supabase from "@/app/libs/supabase"
import songModel from "../../libs/models/song";

export default async function Songs( {params} ) {
    const p = await params;

    const {data, error} = await supabase
    .from('songs')
    .select()
    .eq('id', p.id)
    .single()

    const song = data;
    const videoId = song.youtube_url.split('=')[1]
    // YouTube ให้ thumbnail ฟรีทุกวิดีโอ format: https://img.youtube.com/vi/{VIDEO_ID}/hqdefault.jpg
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    return(
        <div className="p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{song.title}</h1>
            <p className="text-gray-500 mb-6">Duration: {song.duration_seconds}s | Track #{song.track_number}</p>

            {/* วิธีที่ 1: Thumbnail + ลิงก์เปิด YouTube — ใช้ได้ทุกวิดีโอ 100% */}
            <a href={song.youtube_url} target="_blank" rel="noopener noreferrer">
                <div className="relative group cursor-pointer">
                    <img
                        src={thumbnailUrl}
                        alt={song.title}
                        className="w-full rounded-xl shadow-lg"
                    />
                    {/* ปุ่ม Play overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 rounded-xl group-hover:bg-black/50 transition">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                            <span className="text-white text-2xl ml-1">▶</span>
                        </div>
                    </div>
                </div>
            </a>
            <p className="text-sm text-gray-400 mt-2">กดที่ภาพเพื่อดูบน YouTube</p>

            {/* วิธีที่ 2: iframe embed (อาจ unavailable ถ้า YouTube ปิด embed) */}
            {/* 
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
            /> 
            */}
        </div>
    )
}