// ----- 1. Function Declaration (การประกาศฟังก์ชันแบบดั้งเดิม)
// เรียกใช้ก่อนประกาศได้ คือ hoisting (ยกไปอยู่ด้านบน เพื่อเรียกใช้งานก่อนประกาศ function ได้)
let x = name_function('Tor');

function name_function(parameter1="a",parameter2) {
  return "สวัสดี " + parameter1;
}
console.log(x)
// หรือไว้ด้านล่างก็ได้
// let x = name_function('Tor');


// ----- 2. Function Expression (ฟังก์ชันแบบนิพจน์) ลดรูป ไม่ต้องตั้งชื่อ function แล้ว
// // 1. ประกาศฟังก์ชันเก็บไว้ในตัวแปรชื่อ greet ก่อน
// const greet = function(name) {
//   return "สวัสดี " + name;
// };
// // 2. เวลาเรียกใช้งาน: พิมพ์ชื่อตัวแปร แล้วใส่ ( ) พร้อมส่งค่าที่ต้องการเข้าไป
// const result = greet("สมชาย"); 
// console.log(result); // ผลลัพธ์ที่ได้คือ: "สวัสดี สมชาย"

// ----- 3. Arrow Function (ฟังก์ชันลูกศร) ลดรูปอีก ไม่ต้องพิมพ์คำว่า syntax function, return และตัด {} ออกไปเลยย
// const greet = name => `สวัสดี ${name}`;
// console.log(greet('Tor'));
