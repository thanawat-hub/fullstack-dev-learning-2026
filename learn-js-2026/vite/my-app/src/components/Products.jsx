import { useEffect, useState } from "react";

export default function Effects() {
    const [products, setProducts] = useState([]); 
    const [users, setUsers] = useState([]);
    const [fetchDummy, setFetch] = useState([]); // step 1 ประกาศค่า default เพราะถ้า ขอข้อมูล (API) แปลว่าต้องรอ request ก่อน
    const addProduct = () => {
        setProducts(prev => [
            ...prev,
            { 
                idx: prev.length + 1,
                price: Math.floor(Math.random() * 100)
            }
        ]);
    }
    const addUser = () => setUsers(prev => [...prev, {name: 'xxx'}])

    // Not work proper
    // setTimeout(() => addProduct(), 2000);

    const fetchDummyJSON = () => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        // .then(console.log);
        setFetch(prev => [...prev, {json: res}])

    }

    // 1 run every render
    useEffect(() => {
        console.log('Every time');
    })
    // 2 run only first component loaded
    useEffect(() => {
        const timer = setTimeout(() => {
            addProduct()
            setUsers(prev => [...prev, {name: 'xxx'}])
            setFetch(prev => [...prev, {json: {fetchDummy}}])
        }, 3000);
        // destroy when unmount
        return () => clearTimeout(timer);
    }, []);
    // 3 run when dependencies changes
    useEffect(() => {
    }, [products, fetchDummy]);

    return (
        <div>
            <h2>Products</h2>
            <button
                onClick={() => addProduct()}
                className="px-4 py-2 mr-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                +Product
            </button>
            <button
                onClick={() => addUser()}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">
                +User
            </button>
            <button
                onClick={() => fetchDummyJSON()}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 transition-colors">
                +Fetch
            </button>

            <pre className="bg-gray-900 text-green-400 text-sm rounded p-4 mt-2 overflow-auto text-left">
                {JSON.stringify(products, null, 2)}
            </pre>
            <pre className="bg-gray-900 text-green-400 text-sm rounded p-4 mt-2 overflow-auto text-left">
                {JSON.stringify(users, null, 2)}
            </pre>
            <pre className="bg-gray-900 text-green-400 text-sm rounded p-4 mt-2 overflow-auto text-left">
                {JSON.stringify(fetchDummy, null, 2)}
            </pre>
        </div>
    );
}