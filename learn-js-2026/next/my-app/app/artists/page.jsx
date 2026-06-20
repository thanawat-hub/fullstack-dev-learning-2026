"use server";
import supabase from "@/app/libs/supabase"

export default async function Artists () {
    let artists = []
    const {data} = await supabase.from('songs').select('*')
    console.log(data)
    artists = [...data];
    return (
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
    )
}