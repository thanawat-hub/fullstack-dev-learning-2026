import Card from './Card'
import {users} from '../data/users' // import only attribute ใช้ => {object}
// import * as DataUsers
// import keyword default มีเงื่อนไข ชื่อต้องตรงกัน
import { useState } from 'react'; // import useState เพื่อใช้ state ใน component นี้ ให้ re-render เมื่อมีการเปลี่ยนแปลงค่า

export default function Users({}) { //1 เริ่ม

    const className = {
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow',
        buttonLike: 'bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow'
    }
    
    const [count, setCount] = useState(0);
    const clickHandler = (user) => {
        console.log('Clicked');
        alert(`You liked ${user.name}'s profile!`)
        setCount(count + 1);
        user.followers += 1
    }

    const mouseOverHandler = (event) => {
        event.currentTarget.classList.add('scale-125', 'bg-blue-600')
    }
    const mouseOutHandler = (event) => {
        event.currentTarget.classList.remove('scale-125', 'bg-blue-600')
    }

    return (
        <div>
            {/* <Card imgUrl={""} title={"Testing"} description={''}>
                <button className={className.buttonLike}> 
                    Like
                </button> 
            </Card> */}
            <h1>Users</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {
                // console.log(users);
                users.map(user => (
                    <Card 
                        key={user.id} 
                        title={user.name}
                        imgUrl={user.avatar}  
                        description={user.bio}>
                        {/* <button className={className.button}>
                            Watch
                        </button> */}
                        {/* ต้องการให้ เมื่อเม้า on button ห้ามใช้ hover และ
                        button ใหญ่กว่าเดิม 1.25 เท่า และเป็นสีน้ำเงิน */}
                        <button
                            onMouseOver={mouseOverHandler}
                            onMouseOut={mouseOutHandler}
                            onClick={() => clickHandler(user)}
                            className={className.buttonLike}>
                            Like {user.followers}

                        </button>
                    </Card>
                ))
              } 
            </div>
        </div>
    )
}

// เวลาใช้ก็เรียกผ่าน <Users> เพราะเป็นชื่อของ component ที่เรา export ออกมา