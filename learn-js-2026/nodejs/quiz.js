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


// // ----- quiz 4 สร้าง HI LO โดยใช้ เต๋า 3 ลูก (มีแต้ม 1ถึง6)
// สร้างตัวแปร isHeight (boolean)
// 11 แต้มผู้เล่นแพ้ มากกว่า 11 แต้ม คือสูง
// น้อยกว่า 11 แต้ม ต่ำ
// ทำการทอยเต๋า (สุ่ม) และทำการแสดงผลว่าผู้เล่นชนะหรือแพ้
// // try
// import readline from 'readline/promises';
// import { stdin as input, stdout as output } from 'process';

// const rl = readline.createInterface({ input, output });

// let toTalCount = 0;
// let dictResult;
// let predict = await rl.question("HI or Lo: ");

// for (let i = 0 ; i < 3 ; i ++){
//     let randomDict = Math.ceil(Math.random() * 6); // ปัดขึ้น 1-6 or total += Math.ceil(Math.random() * 6);
//     console.log(randomDict);
//     toTalCount += randomDict
// }
// if (toTalCount == 11){
//     console.log("user lose")
// }
// else if (toTalCount > 11){
//     dictResult = "HI";
// }
// else{
//     dictResult = "Lo";
// }
// console.log(toTalCount)

// if (predict == dictResult){
//     console.log("user win")
// }
// else{
//     console.log("user lose")
// }

// ai improve
import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });

console.log("=== ยินดีต้อนรับสู่เกมไฮโล (Hi-Lo) ===");
console.log("พิมพ์ 'EXIT' ในช่องทายเพื่อออกจากเกม\n");

// ใช้ Loop เพื่อให้รองรับการเล่นซ้ำๆ ได้เรื่อยๆ
while (true) {
    let predict = "";

    // Loop ดักจับ Input จนกว่าจะได้ค่าที่ถูกต้อง
    while (true) {
        let inputRaw = await rl.question("ทายผล (HI หรือ LO): ");
        predict = inputRaw.trim().toUpperCase(); // ตัดช่องว่าง + แปลงเป็นตัวใหญ่ทั้งหมด

        if (predict === "EXIT") {
            console.log("ขอบคุณที่ร่วมสนุกครับ! 👋");
            rl.close();
            process.exit(0); // สั่งจบโปรแกรมทันที
        }

        if (predict === "HI" || predict === "LO") {
            break; // ได้ค่าที่ถูกต้องแล้ว ทะลุลูปออกไปคำนวณผล
        }

        console.log("❌ กรุณากรอกเฉพาะ 'HI' หรือ 'LO' เท่านั้น (หรือ 'EXIT' เพื่อออก)");
    }

    // ทอยลูกเต๋า 3 ลูก
    let totalCount = 0;
    console.log("\n🎲 กำลังทอยลูกเต๋า...");
    
    for (let i = 0; i < 3; i++) {
        let randomDice = Math.ceil(Math.random() * 6);
        console.log(`ลูกที่ ${i + 1}: [ ${randomDice} ]`);
        totalCount += randomDice;
    }
    
    console.log(`แต้มรวมทั้งหมด: ${totalCount} แต้ม`);

    // คำนวณผลลัพธ์ตามกติกาไฮโลที่ถูกต้อง
    let diceResult = "";
    if (totalCount === 11) {
        diceResult = "11-HI-LO"; // แต้ม 11 คือเจ้ามือเน้นๆ
    } else if (totalCount > 11) {
        diceResult = "HI";
    } else {
        diceResult = "LO";
    }

    // ตรวจสอบและแสดงผลลัพธ์
    if (diceResult === "11-HI-LO") {
        console.log("💥 ผลออก '11 ไฮโล'! (เจ้ามือรับกินเรียบ ยูสเซอร์แพ้ทั้งหมด)");
        console.log("🔴 User Lose!\n");
    } else if (predict === diceResult) {
        console.log(`🎉 ผลออก '${diceResult}' ตรงกับที่คุณทาย!`);
        console.log("🟢 User Win!\n");
    } else {
        console.log(`😢 ผลออก '${diceResult}' แต่คุณทาย '${predict}'`);
        console.log("🔴 User Lose!\n");
    }

    // คั่นรอบเพื่อความสวยงาม
    console.log("-------------------------------------------\n");
}