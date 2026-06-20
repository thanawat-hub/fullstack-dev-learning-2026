import { useEffect, useState } from "react";

export default function Effects() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);
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

    // run every render
    useEffect(() => {
        console.log('Every time');
    })
    // run only first component loaded
    useEffect(() => {
        const timer = setTimeout(() => {
            addProduct()
            setUsers(prev => [...prev, {name: 'xxx'}])
        }, 3000);
        // destroy when unmount
        return () => clearTimeout(timer);
    }, []);
    // run when dependencies changes
    useEffect(() => {
        console.log('Product');
    }, [products]);

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
            <pre className="bg-gray-900 text-green-400 text-sm rounded p-4 mt-2 overflow-auto text-left">
                {JSON.stringify(products, null, 2)}
            </pre>
            <pre className="bg-gray-900 text-green-400 text-sm rounded p-4 mt-2 overflow-auto text-left">
                {JSON.stringify(users, null, 2)}
            </pre>
        </div>
    );
}