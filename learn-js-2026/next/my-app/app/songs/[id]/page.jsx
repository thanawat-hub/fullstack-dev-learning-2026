// there're song detail
// Add Video Youtube panel

import supabase from "@/app/libs/supabase"

export default async function Songs( {params} ) {
    const p = await params;

    const {data, error} = await supabase
    .from('songs')
    .select()
    .eq('id', p.id)
    .single()

        const song = data;
        const videoId = song.youtube_url.split('=')[1]
        const embedUrl = `https://www.youtube.com/embed/${videoId}`
        console.log(embedUrl)
    return(
        <div>
            <h1>{song.title}</h1>
            <pre> {embedUrl} </pre>
            {/* embed YouTube video 
            Video unavailable วิดีโอถูกลบ เป็นเพราะ YouTube ปิด embed หรือวีดีโอไม่มีแล้ว มันไม่ใช่ปัญหาโค้ด */}
            <iframe
                width="560"
                height="315"
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
            />
            
            <a href={song.youtube_url} target="_blank" className="text-blue-500 underline mt-4 block">
                ดูบน YouTube
            </a>
            <p>Duration: {song.duration_seconds}s</p>
        </div>
    )
}