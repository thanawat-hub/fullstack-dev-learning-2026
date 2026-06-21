import supabase from "../supabase"

const artistModel = {
    // return specific data by id
    getId: async (id) => {
        return await supabase
            .from('artists')    // ← table ชื่อ artists (มี s)
            .select()
            .eq('id', id)
            .single()
    },
    // return all data
    getAll: async () => {
        return await supabase
            .from('artists')    // ← table ชื่อ artists (มี s)
            .select('*')
    }
}

export default artistModel
