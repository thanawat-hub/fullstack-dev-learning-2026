// "จังหวะในการบวกค่า" i is iterate
// i++ (Post-increment คือเอา i ไปใช้แล้วค่อยมาบวก) 
// ++i (Pre-increment) คือบวก 1 เข้าไปใน i ก่อนแล้วค่อยไปใช้

const playlist = ["Song A", "Song B", "Song C"];
let currentTrack = 0;

function playNext() {
    // ดึงเพลงตำแหน่ง currentTrack ปัจจุบันมาเปิดก่อน แล้วค่อยบวกเพิ่ม 1 ไปรอเพลงถัดไป
    return playlist[currentTrack++]; 
    // [change this to see difference] ดึงเพลงตำแหน่ง currentTrack บวกเพิ่ม 1 ไปเลย
    // return playlist[++currentTrack]; 
}

console.log(playNext()); // ผลลัพธ์: "Song A" (เพราะส่ง 0 ไปใส่ Array ก่อน แล้ว currentTrack กลายเป็น 1)
console.log(playNext()); // ผลลัพธ์: "Song B" (เพราะส่ง 1 ไปใส่ Array ก่อน แล้ว currentTrack กลายเป็น 2)
console.log(playNext());
console.log(playNext());


// let attempts = 0;
// const maxAttempts = 3;

// // ลูปจะเอา attempts ปัจจุบันไปเทียบกับ maxAttempts ก่อน แล้วค่อยบวกค่าเพิ่ม
// while (attempts++ < maxAttempts) {
//     console.log(`ลองล็อกอินครั้งที่ ${attempts}`); 
// }