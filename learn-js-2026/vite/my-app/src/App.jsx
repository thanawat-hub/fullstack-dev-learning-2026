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
  const profiles = [
    { img: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", title: "Shoes", description: "A card component has a figure, a body part, and inside body there are title and actions parts" },
    { img: "src/assets/Screenshot.png", title: "Frontend Developer", description: "A card component has a figure, a body part, and inside body there are title and actions parts" },
  ]
  return (
// ทำแบบนี้ไม่ได้ เนื่องจากกฏ JS มันต้องการ ให้ fn app มี 1 return -> ด้านหลัง DOM React จะแปลงโค้ด HTML เหล่านั้นให้กลายเป็นฟังก์ชัน JS
    // <h1> Hello World</h1>
    // <h1> Hello React</h1>
    
    <div style={ appStlye } className="txt">
      <WelcomeMessage/>
      <h1> This text is passing vairbles {message}</h1>
      <p> Result of 5 + 3 is : {cal(5,3)}</p>
      {
        profiles.map((profile, index) => (
          <Card img={profile.img} title={profile.title} description={profile.description}/>
        ))
      }
    </div>
  )
}

export default App
