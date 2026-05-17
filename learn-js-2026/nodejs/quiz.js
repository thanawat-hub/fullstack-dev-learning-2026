// ----- quiz 1 print เลข คู่

// sol 1
// let i = 0;
// while ( i < 10.00 ){
//     // i = i+1; เทียบเท่ากันกับ pre-increment
//     ++i; //(บวกก่อนเอาไปใช้)
//     if (i % 2 == 1){
//         console.log(i)    
//     }
// }

// sol 2
// let i = 0;
// while ( i < 10.00 ){
//     if (i % 2){
//         console.log(i);  
//     }
//     i++;//(ถูกใช้แล้วเอา i ไปบวก)
// }

// // sol 3
// let i = 0;
// while ( i < 10 ){
//     i+=2
//     console.log(i)
// }


// ----- quiz 2 ให้สุ่มเลข 100 ครั้ง
// ถ้าตัวเลขที่สุ่ม หาร 7 ลงตัว ไม่ต้องแสดงผล 
// ถ้าตัวเลขที่สุ่ม หาร 3 และ 5 ให้แสดงผล bingo
// เมื่อสุ่มได้ผล เกิน 900 ให้หยุด โดยสุ่มจาก 1 - 1000
// ให้แสดงเลขผลลัพธ์ที่สุ่ม หลังจากจบ program

// let i = 0;
// while (i <= 100){
//     let randoNumber = Math.ceil(Math.random() * 1_000); // ปัดขึ้น 1-1000
//     console.log("สุ่มครั้งที่", i, "ได้เลข", randoNumber)

//     if (randoNumber > 900){
//         console.log(randoNumber)
//         break;
//     }
//     if ( randoNumber % 3 && randoNumber % 5){
//         if (randoNumber % 7){
//             //ไม่แสดงผลอะไร
//         }
//         else {
//             console.log(`${i}:`, "BINGO")
//         }
//     }
//     i = i + 1;
//     // i++;
// }

// ปรับให้ดีขึ้นได้ ถ้าสังเกตสิ่งที่ไม่ได้ใช้ให้เอาออก เช่นเรื่อง i และเรื่อง if ที่ไม่แสดงอะไร

// เช่น (เฉลย) เนื่องจากไม่ได้ใช้ตัว i ด้านล่างแล้ว ตัว if จะได้ไม่ซ้อนกัน
// let j = 0;
// let m = 100;
// while (j++ <= 100){
//     let randoNumber = Math.ceil(Math.random() * 1_000); // ปัดขึ้น 1-1000
//     console.log("สุ่มครั้งที่", j, "ได้เลข", randoNumber)
//     if (randoNumber > 900){
//         break;
//     }
//     if (randoNumber % 7 === 0) continue;

//     if ( randoNumber % 3 === 0 && randoNumber % 5 === 0){
//     console.log('BINGO');
//     } else {
//         console.log(`${j}: ${randoNumber}`);
//     } 
// }


// // ----- quiz 3 เขียนสูตรคูณ แม่ 2-12
// for (let i=2 ; i <= 12 ; i++){
//     console.log(`สูตรคูณแม่ ${i} `)
//     for (j=1 ; j <= 12 ; j++){
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }
    