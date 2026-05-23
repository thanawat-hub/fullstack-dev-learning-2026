// ตั้งต้น
// nRow = 6

// // ท่า concat
// let display = ""
// for ( let i = 0; i < nRow ; i ++){
//     for ( let j = 0 ; j <= i ; j++) {
//         // display += "*"
//         display += j
//         // console.log("*")
//         // process.stdout.write(j)
//     }
//     display += "\n"
// }
// console.log(display)


// ใช้ process.stdout.write(`${}`)
// for ( let i = 0; i < nRow ; i ++){    
//     for ( let j = 0 ; j <= i ; j++) {
//         process.stdout.write(`${j}`)
//     }
//     console.log()
// }


// ----- โจทย์
/*
* * * * *
*       *
*       *
* * * * *
*/
// nRow = 4
// nColumn = 5
// for ( let i = 0; i < nRow ; i ++){    
//     for ( let j = 0 ; j < nColumn ; j++) {
// // เงื่อนไข: แถวแรก(0), แถวสุดท้าย(nRow-1), คอลัมน์แรก(0), คอลัมน์สุดท้าย(nColumn-1)
//         if (i === 0 || i === nRow - 1 || j === 0 || j === nColumn - 1) {
//             process.stdout.write("* ");
//         } else {
//             process.stdout.write("  "); // พิมพ์ช่องว่างตรงกลางกล่อง
//         }


//     }
//     console.log()
// }


// ---- เฉลย 1 
/*
      1
    2 1 2
  3 2 1 2 3
4 3 2 1 2 3 4
*/

let m = 5
// loop for row
for(let i = 1; i <= m; i++) {
    // space before number
    for (let n = m; n > i; n--) {
        process.stdout.write(` `)
    }
    // number before middle
    for (let k = i; k > 1; k--) {
        process.stdout.write(`${k}`)
    }
    // number middle to end
    for (let j = 1; j <= i; j++) {
        process.stdout.write(`${j}`)
    }
    console.log()
}