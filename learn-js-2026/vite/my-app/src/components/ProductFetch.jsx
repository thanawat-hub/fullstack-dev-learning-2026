import { useEffect, useState } from "react";
import Card from "./Card"
export default function Effects() {
    const [products, setProduct] = useState([]); // step 1 ประกาศค่า default เพราะถ้า ขอข้อมูล (API) แปลว่าต้องรอ request ก่อน

    // step 3 เลือกใช้ useEffect mode อะไร จาก data ที่มาจากการ fetch
    useEffect(() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => {
            // console.log(data.products)
            // step 4 setProduct เข้าไปที่ state เพื่อโชว์ที่ pre
            setProduct(data.products)
        });
        
    }, []);

    // step 1 simples debug infor ใน pre tag จากค่าที่เราประกาศ in step 1
    return (
        <div>
            <h1>Products</h1>
            {/* โจทย์ต่อไป ต่อบ่ายให้ กด detail แล้วแสดงผลที่ search bar ตรงนี้ */}
            <div className='border rounded-2xl shadow-md bg-white p-6 my-4 text-left'>
                <p className='text-gray-400'>Show product detail when select</p>
            </div>
            
            <div className='grid grid-cols-2 gap-2'>
            {
                // step 5 เป็นจาก product data ให้render products into card components
                products.map(product => (
                    // console.log(product)
                    <Card
                        key={product.id}
                        title={product.title}
                        imgUrl={product.thumbnail}
                        description={product.description}>
                            <button
                                onClick={() => setSelectedProduct(product)}
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
                                Detail
                            </button>
                    </Card>
                ))
            }
            </div>
            
            { /* 0. simple debug info */ }
            <pre>
                {JSON.stringify(products, null, 2)}
            </pre>
        </div>
    )
}