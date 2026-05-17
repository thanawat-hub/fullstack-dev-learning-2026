// let a = new Date().getDay()
// console.log(a)
a = 6
// มี case ไม่มี break มันจะทะลุไป case ถัดไปด้านล่าง
switch (a) {
  default:
    text = "Looking forward to the Weekend";
    
    break;
  case 6:
    text = "Today is Saturday";
    // break;
  case 8:
    text = "Today is 213123";
    break;
  case 0:
    text = "Today is Sunday";
    break;
}
console.log(text)