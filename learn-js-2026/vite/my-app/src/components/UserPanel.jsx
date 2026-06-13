import { useState } from 'react';

export default function UserPanel({ searchHandler }) {
    const [inputValue, setInputValue] = useState('');
    const onSubmit = () => {
        // alert(inputValue);
        searchHandler(inputValue);
    }
    const onChangeHandler = (value) => {
        setInputValue(value); // เก็บค่าที่พิมพ์ในช่อง search ลงใน state inputValue เพื่อให้เราสามารถนำไปใช้ต่อได้ เช่น ส่งไปให้ parent component ผ่าน searchHandler ไม่งั้นพิมพ์ไม่ออก
        // searchHandler(value);
    }
    return (
        <div className="bg-white p-4 rounded-lg shadow flex gap-2">
            <input
                type="text"
                name="search"
                value={inputValue} // ค่าที่อยู่ในช่อง search
                onChange={(e) => onChangeHandler(e.target.value)}
                placeholder="Search users..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
                onClick={() => onSubmit()}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
                Search
            </button>
        </div>
    )
}