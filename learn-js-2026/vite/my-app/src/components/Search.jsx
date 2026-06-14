import { useState } from "react"

export default function Search({onSearchHandler}) {
    const [inputValue, setInputValue] = useState(''); // string แล้วแต่จะกำหนด บางครั้งก็ array ,null ขึ้นกับ data ตัวนี้ไว้สำหรับให้เขียน search ได้

    const onChangeHandler = (value) => {
        setInputValue(value);
        onSearchHandler(value);
    }

    return (
        <div className="bg-white p-4 rounded-lg shadow flex gap-2">
            <input
                type="text"
                name="search"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onChange={(e) => onChangeHandler(e.target.value)}
            />
        </div>
    )
}