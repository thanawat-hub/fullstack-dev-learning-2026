import Card from './Card'
import { users } from '../data/users' // import only attribute ใช้ => {object}
// import * as DataUsers
// import keyword default มีเงื่อนไข ชื่อต้องตรงกัน
import { useState } from 'react'; // import useState เพื่อใช้ state ใน component นี้ ให้ re-render เมื่อมีการเปลี่ยนแปลงค่า
import UserPanel from './UserPanel';

export default function Users({ }) { //1 เริ่ม

    const className = {
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow',
        buttonLike: 'bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow'
    }

    const [usersState, setUsersState] = useState(users); //สร้าง state สำหรับเก็บข้อมูล users โดยใช้ useState และกำหนดค่าเริ่มต้นเป็น users ที่เรา import มา
    const clickHandler = (user) => {
        // increse followers of user by 1 when click like button
        console.log(user.followers);
        // แบบที่ 1 
        // setUsersState(usersState.map(u => {
        // if (u.id === user.id) {
        //     return {
        //     ...u,
        //     followers: u.followers + 1
        //     }
        // }
        // return u;
        // }))


        // // แบบที่ 2 concept เหมือนกันคือหา index ก่อนแล้วค่อยแก้ไข แต่จะไม่แก้ไขตัวเดิมโดยตรง แต่จะสร้าง copy ของ users มาใหม่ เพื่อไม่ให้ไปแก้ไขตัวเดิมโดยตรง เพราะถ้าแก้ไขตัวเดิมโดยตรง React จะไม่รู้ว่า state เปลี่ยนแปลงแล้ว และจะไม่ re-render component
        const userIdx = users.findIndex(u => u.id === user.id); // หา index ว่าอยู่ช่องไหนของ array users
        const newUsers = [...users]; // สร้าง copy ของ users มาใหม่ และแก้ไขใน copy แทนที่จะไปแก้ไขตัวเดิมโดยตรง
        newUsers[userIdx].followers += 1; // +1 ไปที่ index ตัวนั้น
        setUsersState([...usersState]);
        console.log(newUsers[userIdx].followers);
    }

    const onSearchHandler = (value) => {
        console.log(value)
        setUsersState(users.filter(user => user.name.toLowerCase().includes(value.toLowerCase())));
    }

    const mouseOverHandler = (e) => {
        e.target.className = className.button + ' scale-125 cursor-pointer'
    }
    const mouseLeaveHandler = (e) => {
        e.target.className = className.button
    }
    return (
        <div>
            <h1>Users</h1>
            <UserPanel 
              searchHandler={ (value) => onSearchHandler(value)}
            />
            <div className='grid grid-cols-2 gap-2'>
                {
                    usersState.map(user => (
                        <Card
                            key={user.id}
                            title={user.name}
                            imgUrl={user.avatar}
                            description={user.bio}>
                            <button
                                onMouseOver={(event) => mouseOverHandler(event)}
                                onMouseLeave={(event) => mouseLeaveHandler(event)}
                                onClick={() => clickHandler(user)}
                                // onClick={clickHandler(user)} // wrong
                                className={className.button}>
                                Like {user.followers}
                            </button>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
}
// เวลาใช้ก็เรียกผ่าน <Users> เพราะเป็นชื่อของ component ที่เรา export ออกมา