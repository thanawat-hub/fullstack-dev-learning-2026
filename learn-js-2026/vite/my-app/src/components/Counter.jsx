import  { useState } from 'react'; 
export default function Counter() {
    const className = {
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow'
    }

    // let count = 0;
    // state แทนการใช้ตัวแปรธรรมดา เพราะเมื่อมีการเปลี่ยนแปลงค่า ตัวแปรธรรมดาจะไม่ทำให้ component re-render แต่ state จะทำให้ component re-render เมื่อมีการเปลี่ยนแปลงค่า
    const [count, setCount] = useState(0);

    const clickHandler = (action) => {
        if (action === 'increment') {
            setCount(count + 1);
        } else if (action === 'decrement') {
            setCount(count - 1);
        }
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button
                className={className.button}
                onClick={() => clickHandler('increment')}>
                Increment
            </button>
            <button
                className={className.button}
                onClick={() => clickHandler('decrement')}>
                Decrement
            </button>
        </div>
    )
}