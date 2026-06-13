// import { useState, useRef } from 'react';
// import Button from './Button';

// export default function Timer() {
//     const className = {
//         container: 'flex flex-col items-center gap-6 p-8',
//         display: 'grid grid-cols-3 gap-4 items-center w-full',
//         time: 'text-5xl font-bold text-white col-span-3 text-center',
//         buttons: 'col-span-3 grid grid-cols-3 gap-4 w-full',
//         btnStart: 'bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg shadow',
//         btnStop: 'bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-lg shadow',
//         btnReset: 'bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg shadow'
//     }

//     const [time, setTime] = useState(0);
//     const timerRef = useRef(null);

//     const startTimer = () => {
//         if (timerRef.current === null) {
//             timerRef.current = setInterval(() => {
//                 setTime(prevTime => prevTime + 1);
//             }, 1000);
//         }
//     }

//     const stopTimer = () => {
//         if (timerRef.current !== null) {
//             clearInterval(timerRef.current);
//             timerRef.current = null;
//         }
//     }

//     const resetTimer = () => {
//         stopTimer();
//         setTime(0);
//     }

//     return (
//         <div className={className.container}>
//             <h2 className="text-2xl font-bold mb-4">Timer Component</h2>
//             <div className={className.display}>
//                 <div className={className.time}>{time} seconds</div>
//                 <div className={className.buttons}>
//                     <Button className={className.btnStart} onClick={startTimer}>
//                         Start
//                     </Button>
//                     <Button className={className.btnStop} onClick={stopTimer}>
//                         Stop
//                     </Button>
//                     <Button className={className.btnReset} onClick={resetTimer}>
//                         Reset
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// no useRef, ใช้ setInterval และ clearInterval แทน
import { useState } from 'react';

export default function Timer() {
    let [time, setTime] = useState(0);
    let [timerId, setTimerId] = useState(null);
    
    const startTimer = () => {
        if (timerId) {
            return; // Timer is already running
        }
        const intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        setTimerId(intervalId);

    }
    const stopTimer = () => {
        clearInterval(timerId);
        setTimerId(null);
    }

    return (
        <div>
            <h1> TImer </h1>
            <p>Time: {time} seconds</p>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={() => setTime(0)}>Reset</button>
            </div>
        </div>
    )
}
