// //สร้างคอมโพเนนต์ที่แสดงข้อความต้อนรับ และ export ไปใช้
// function WelcomeMessage () {
//     return (
//         <div>
//             <h1>Welcome to My React App!</h1>
//             <p>This is a simple component to greet users.</p>
//         </div>
//     );
// }


// // ขอ function เดิม แต่เป็นรูปแบบของ arrow function
// const WelcomeMessage = () => {
//     return (   
//         // React Fragment คือการห่อหุ้มหลายๆ element โดยไม่ต้องเพิ่ม node ใหม่ใน DOM
//         <div> 
//             <h1>Welcome to My React App!</h1>
//             <p>This is a simple component (ชื่อ component ต้องเหมือนกับชื่อไฟล์)</p>
//         </div>
//     );
// }
// export default WelcomeMessage;

const WelcomeMessage = () => (
  <div>
    <div> 
        <h1>Welcome to My React App!</h1>
        <p>This is a simple component (ชื่อ component ต้องเหมือนกับชื่อไฟล์ [Best Practice])</p>
    </div>
  </div>
)
export default WelcomeMessage;