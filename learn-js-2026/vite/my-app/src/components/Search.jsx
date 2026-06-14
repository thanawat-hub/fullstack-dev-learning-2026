// shared search component
import { useState } from "react"

// shared search component
export default function Search({onSearch, matched}) {
    const [value, setValue] = useState('');
    const changeHandler = (value) => {
        setValue(value);
        onSearch(value);
    }
    return (
        <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
            <input
                type="text"
                name="search"
                // value={value}
                // onChange={(e) => changeHandler(e.target.value)}
                onChange={(e) => onSearch(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="align-start">
                <p>Match: {matched} </p>
            </div>
        </div>
    )
}