เนื้อหา.
https://viruskizz.notion.site/13-React-Paradigm-Shift-JSX-Syntax-3779bafa6b4a800abfb1e84668054208#3779bafa6b4a809da099cfe5a41ec3ec

ตัว vite เป็น lib ที่รวมหลายๆอย่างมาแล้ว เช่น nodemon
เพราแต่ก่อนอาจจะต้องลง
nodemon เพื่อช่วย refrash page ให้แทนตอนเราเดฟ (ไปคอย check socket)
.
เริ่มต้นลง
```
npm create vite@latest my-app -- --template react-js
```
react -> JavaScript + React Compiler
.

อธิบายไฟล์ต่างๆ 
Dependencies -> npm install
devDependencies ติดตั้งเฉพาะบน dev env -> npm install --dev

app.jsx 
ตัว .jsx คือมี html อยู่ข้างใน คือเขียนแบบ style componant
ตัว .js คือจะมีแค่ logic

```
npm install tailwindcss @tailwindcss/vite
```


คือถ้าใช้บน codespaces ถ้าเคลีย แปลว่า เรา push แบบ ignore node_modules ทำให้เราต้องมา 
@ path 
```
cd learn-js-2026/vite/my-app
```
```
npm install
npm run dev
```