// Operation: + - * / % **
// Significant () ** / % * + -

console.log('1 + 1 =', 1 + 1);
console.log('1 - 1 =', 1 - 1);
console.log('2 * 2 =', 2 * 2);
console.log('9 / 3 =', 9 / 3);
console.log('10 % 3 =', 10 % 3);
console.log('2 ** 3 =', 2 ** 3);
console.log('5 * 5 - 2 =', 5 * 5 - 2); // 25 - 2, 23
console.log('5 * (5 - 2) =', 5 * (5 - 2)); // 5 * 3, 15
const x = 1;
const y = 2;
const z = x * y;

// Create r variable then show circle area.
// try:
let r = 5; //cm
const PI = 3.14; // เหมือนข้ามไฟล์ก็ไม่ได้นะ const
var circle = PI * r**2;
console.log('circle area is', circle);

// เฉลย มีหลายวิธี
// const PI = 3.1416;
// let r = 7;
var circle;
circle = PI * r ** 2;
circle = PI * r * r;
console.log(circle);

// Math Function
console.log(Math.PI);
console.log(Math.PI * Math.pow(r, 2));
console.log(Math.random()); // random 0 - 1
console.log(Math.floor(1.9));
console.log(Math.round(1.5));
console.log(Math.ceil(1.1));

// create variable range that random between 1 - 10;
let range = Math.ceil(Math.random() * 10); // ปัดขึ้น 1-10
console.log(range);