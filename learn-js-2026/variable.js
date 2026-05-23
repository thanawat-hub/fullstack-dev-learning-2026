'use strict' // บอกให้ระบุให้เข้มงวด เช่นบรรทัดที่บอกถึงการตั้งชื่อตัวแปรแบบไม่มี declear บอกด้านหน้า

// Variable 
var name = "Tor";
console.log("Hello", name);


// multi line
const emailTemplate = `
สวัสดีคุณลูกค้า,

ขอบคุณที่ใช้บริการของเรา
ทีมงานจะติดต่อกลับไปโดยเร็วที่สุด
`;
console.log(emailTemplate);


// ====== var
var firstName = "Thanawat";
var lastName = "Boon";
// console.log(firstName + lastName)

// fullnameeeeeeeeeee = 'Thhhhhhhh' // ถ้า comment ตัว use strcit จะทำให้ ใช้ได้ ซึ่งไม่ควรปล่อยให้เป็นประมาณนี้ | default จะเป็น var ควรใช้ let เพราะจะได้รูว่าอะไรประกาศไปแล้ว
// console.log(fullnameeeeeeeeeee)

// ====== let
// let lastName = "Boonya" => ประกาศซ้ำไม่ได้ ควรใช้เพื่อให้รู้
var lastName = "Boonyasitpichai";
console.log(firstName + " " +lastName);

let height = 5;
let width = 10;
console.log(height*width);

// ====== const
const PI = 3.1415926535857532941458385;
const Dollar = 32.2;

// ====== กฏการตั้งชื่อตัวแปร
// 1. case sentitive ชื่อเดียวกัน แต่คนละตัวพิมพ์ก็ต่าง address กัน
const x = 5;
const X = 10;
// 2. ไม่ขึ้นต้นด้วยตัวเลข และบางสัญญาลักษณ์พิเศษบางอันก็ไม่ควร
// var #2a = 5 - error
// console.log(#2a) 
// 3. ไม่สามารถใช้ reserved word หรือ system word
// var const = 50 - error
// 4. no space and use CamelCases or SankCases (JS use Camel)
const fullName = "Thanawat"; // Camel case
const full_name = "Thanawat"; // Snake case
// 5. ทำให้เข้าใจง่ายๆ ตั้งชื่อให้สื่อ
// 6. ควรจะ uppercapitalize for constant varible
const PRIMATY_COLOR = '#12345';
let primart_color = '#12345';

console.log(typeof "")          // Returns "string"
// console.log(typeof "John")

console.log(typeof 3.14)        // Returns "number"
console.log(typeof (3 + 4))
// มีอีกมาก ต้องศึกษาเพิ่มเติม https://www.w3schools.com/js/js_datatypes_primitives.asp