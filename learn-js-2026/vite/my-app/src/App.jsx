import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { users } from './data/users.js'
import { albums } from './data/albums.js'
import WelcomeMessage from './components/WelcomeMessage.jsx'
import Card from './components/card.jsx'

function App() {
  // passing vairbles 
  let message = 'Hello React!';
  const cal = (a,b) => a + b;
  const appStlye = {
    color : 'red'
  }
  return (
// ทำแบบนี้ไม่ได้ เนื่องจากกฏ JS มันต้องการ ให้ fn app มี 1 return -> ด้านหลัง DOM React จะแปลงโค้ด HTML เหล่านั้นให้กลายเป็นฟังก์ชัน JS
    // <h1> Hello World</h1>
    // <h1> Hello React</h1>
    
    <div style={ appStlye } className="txt">
      <WelcomeMessage/>
      <h1> This text is passing vairbles {message}</h1>
      <p> Result of 5 + 3 is : {cal(5,3)}</p>
      <Card/>
      <Card img="src/assets/Screenshot-2.png" title="Card Title 2" description="This is the second card"/>
    </div>
  )
}

export default App
