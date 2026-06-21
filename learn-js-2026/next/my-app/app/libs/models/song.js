import supabase from "../supabase"

const songModel = {
    getId: async (id) => {
        return await supabase
            .from('songs')     // ← ต้องมี . นำหน้า
            .select()
            .eq('id', id)      // ← ใช้ id ที่รับเข้ามา ไม่ใช่ p.id
            .single()
    }
}

export default songModel
