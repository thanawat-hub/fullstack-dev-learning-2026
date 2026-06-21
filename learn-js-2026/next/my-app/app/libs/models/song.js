import supabase from "../supabase"

const songModel = {
    getId: async (id) => {
        return await supabase
            from('songs')
            .select()
            .eq('id', p.id)
            .single()
    }
}

export default songModel