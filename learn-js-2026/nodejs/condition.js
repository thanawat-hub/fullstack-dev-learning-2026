// ----- one line condtion (ถ้าจริงจะปริ้นออกมา)
// if (true) console.log('is true');
// if (false) console.log('is false');


// ----- ==, ===
if (1 == 2) {
    console.log(' 1 == 2 it');
    console.log('is true')
}
else{
    console.log(' 1 == 2 it');
    console.log('is false')
}

// Type Coercion" (การแปลงประเภทข้อมูลอัตโนมัติ) ซึ่งเป็นหนึ่งในเอกลักษณ์ (และบางครั้งก็เป็นความน่าปวดหัว) ของภาษา JavaScript เป็นการแปลง string -> number
if (1 == '1') console.log(' 1 == \'1\' is true');

let a = '1'
let A = 1
if (a == A) console.log(' \'1\' == 1 is true', typeof(a) ,'and', typeof(A));

// compare type
if (1 === '1') console.log(' 1 == "1" is true');


// ----- logic (ตรรกศาสตร์)
// Logical Operators (ตัวดำเนินการทางตรรกศาสตร์) ได้แก่ <, >, <=, >=, && (and), || (or), ! (not)

if(false && true) console.log('orange');

if (false || true) console.log('apple');

if (!false) console.log('apple2');


const score = 0;
const finalScore1 = score || 100; // ได้ 100 (เพราะ || มองว่า 0 คือ falsy)
console.log(finalScore1);
// (?? (Nullish Coalescing)
const finalScore2 = score ?? 100; // ได้ 0  (เพราะ ?? มองว่า 0 ไม่ใช่ null/undefined)
console.log(finalScore2)
const finalScore3 = undefined ?? 100; // ได้ 100
console.log(finalScore3)

// ? : (Ternary Operator)
const age = 20;
const status = (age >= 18) ? "ผู้ใหญ่" : "เด็ก"; 
console.log(status); // ได้ "ผู้ใหญ่"

// ----- Bitwise Operators (ตัวดำเนินการระดับบิต)
// ถ้าเราเขียน | หรือ & แค่ตัวเดียว มันจะไม่ใช่ Logical Operator
// & (Bitwise AND) และ | (Bitwise OR): มันจะแปลงตัวเลขฐานสิบให้กลายเป็น เลขฐานสอง (0 กับ 1) แล้วเอามาคำนวณกันทีละหลัก ซึ่งในชีวิตจริงของการเขียนเว็บหรือแอปทั่วไป แทบจะไม่ได้ใช้เลยครับ (มักใช้ในงานคำนวณระดับต่ำ, การจัดการกราฟิก หรือ cryptography)


// cal price discount
let total_price = 500.00 
let discount = 5
let final_price = total_price - (total_price * discount) / 100;
// ใช้ Template Literals (f-string) และกำหนดทศนิยม 2 ตำแหน่งด้วย .toFixed(2)
console.log(`ราคาคงเหลือหลังลด ${discount}% = ${final_price.toFixed(2)} บาท`);