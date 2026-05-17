// // ----- 1. while loop ควรรู้ว่าจะหยุดเมื่อไหร่
// let i = 0;
// while ( i < 10.00 ){
//     // i = i+1; เทียบเท่ากันกับ pre-increment
//     ++i; //(บวกก่อนเอาไปใช้)
// }

// // while true break with condition
// let count = 5;
// while (true){
//     console.log(`รอบที่ ${count}`);
//     count++;

//     // เงื่อนไขในการหยุด
//     if (count >= 5) {
//         console.log("เจอ break แล้ว! สั่งหยุดลูป");
//         break; 
//     }
// } 

// // while with continue and break
// let i = 0;
// while (true){
//     if (i % 2 == 1){
//         i++;
//         continue
//     }
//     console.log(i);
//     i++;
//     if (i === 51) break
// }

// // while true in function using return
// function findLuckyNumber() {
//     while (true) {
//         let num = Math.floor(Math.random() * 100); // สุ่มเลข 0-99
//         console.log(`สุ่มได้เลข: ${num}`);
//         if (num === 7) {
//             return "เจอเลข 7 แล้ว! จบฟังก์ชันทันที"; // หลุดทั้งลูป จบทั้งฟังก์ชัน
//         }
//     }
// }
// const result = findLuckyNumber();
// console.log(result);

// // while true connection
// function checkServerStatus(){
//     return 'SERVER_DOWN'
// }

// while (true) {
//     let connection = checkServerStatus();
    
//     if (connection === "SERVER_DOWN") {
//         throw new Error("เซิร์ฟเวอร์พังเกินเยียวยา หยุดระบบเดี๋ยวนี้!"); // หยุดลูปและหยุดโปรแกรมทันที
//     }
// }

// // เปลี่ยนไปใช้ตัวแปร Flag แทน (ทางเลือกที่ปลอดภัยกว่า) เหล่านักพัฒนาหลายคนมองว่าการเขียน while (true) มันดูอันตรายและอ่านยาก (เพราะต้องไล่ดูว่า break อยู่ไหน) เขาเลยนิยมใช้ ตัวแปรสถานะ (Flag/Boolean) มาใส่เป็นเงื่อนไขแทน เพื่อให้โค้ดดูสุภาพและควบคุมง่ายขึ้นครับ
// let isRunning = true;
// let energy = 100;

// while (isRunning) {
//     console.log("กำลังวิ่งอยู่...");
//     energy -= 30;

//     if (energy <= 0) {
//         isRunning = false; // ปรับเป็น false พอจบรอบนี้ ลูปจะตรวจเงื่อนไขใหม่แล้วหยุดเอง
//         console.log("เหนื่อยแล้ว หยุดวิ่ง");
//     }
// }



// // ----- 2. for loop ควรรู้ว่าจะวนกี่รอบ
// 2.1 Traditional for loop (แบบดั้งเดิม) ใช้เมื่อรู้จำนวนรอบที่แน่นอน หรือต้องการควบคุมตัวนับ (i) ด้วยตัวเอง
// โครงสร้าง: for (initialization; condition; afterthought or call increment)
// for (let i = 0; i < 1_000.00 ; i ++){
//     console.log(i); // วน 1,000 รอบ: 0, 1, 2, 3, 4 .. 999, 1000
// }


// // 2.2 for...of (ใช้กับ Array หรือข้อมูลที่เป็นกลุ่ม) เกิดมาเพื่อดึง "ค่า (Value)" ข้างใน Array ออกมาทีละตัวโดยไม่ต้องใช้ตัวนับ i ให้ปวดหัว อ่านง่ายที่สุด
// // โครงสร้าง: for (let item of array)
// const fruits = ['🍎', '🍌', '🍊'];
// for (let fruit of fruits) {
//     console.log(fruit); // ได้ผลลัพธ์เป็น: 🍎, 🍌, 🍊
// }

// 2.2.2 ทำงานเหมือน for...of คือส่งค่าใน Array ออกมาทีละตัวเพื่อเอาไปใช้งาน
// const numbers = [1, 2, 3];
// numbers.forEach(num => console.log(num * 2)); // 2, 4, 6

// // 2.3 for...in (ใช้กับ Object) เกิดมาเพื่อดึง "คีย์ (Key หรือ Property)" ของ Object ออกมาทีละตัว (ถ้าใช้กับ Array จะได้เลข Index)
// // โครงสร้าง: for (let key in object)
// const user = { name: 'John', age: 25 };
// for (let key in user) {
//     console.log(key + ': ' + user[key]); // ได้: name: John, age: 25
// }

// 2.4 .map() (วนลูปเพื่อเปลี่ยนค่าแล้วสร้าง Array ใหม่) แปลงข้อมูลใน Array ทีละตัว แล้วส่ง Array ชุดใหม่ออกมา (นิยมมากใน React)
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2); 
// console.log(doubled); // [2, 4, 6]


// // etc
// for (let i = 10 ; i > 0 ; i--){
//     console.log(i)
// }

// มากกว่า 1 ตัวแปรได้ ; และ เงื่อนไขต้องเป็นจริงถึงจะทำ ; และเมื่อทำเสร็จ จะทำ step 
for (let i = 0, j = 10; i < j; i++, j--){
    console.log(`${i} < ${j}`)
}

