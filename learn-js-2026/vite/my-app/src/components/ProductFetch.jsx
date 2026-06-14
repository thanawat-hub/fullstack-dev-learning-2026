import { useEffect, useState } from "react";
import Card from "./Card"
import Search from "./Search"

// export default function Effects() {
//     const [products, setProduct] = useState([]); // step 1 ประกาศค่า default เพราะถ้า ขอข้อมูล (API) แปลว่าต้องรอ request ก่อน
//     const [selectedProduct, setSelectedProduct] = useState([null]); // default ให้เป็น null
//     const [FileteredProducts, setFileteredProducts] = useState([null])
//     // สร้าง function ใหม่ ก็ไม่ใช้บรรทัดที่ onClick={() => setSelectedProduct(product)} 
//     // จะเป็น handleDetail แทน และไม่ต้องมีบรรทัดที่ 22
//     // const handleDetail = (product) => {
//     //     setSelectedProduct(product);
//     // };

//     // step 3 เลือกใช้ useEffect mode อะไร จาก data ที่มาจากการ fetch
//     useEffect(() => {
//         fetch('https://dummyjson.com/products')
//         .then(res => res.json())
//         .then(data => {
//             // console.log(data.products)
//             // step 4 setProduct เข้าไปที่ state เพื่อโชว์ที่ pre
//             setProduct(data.products)
//             setSelectedProduct(selectedProduct)
//         });
        
//     }, []);

//     const onSearchHandler = (value) => {
//         console.log(value)
//     }

//     // step 1 simples debug infor ใน pre tag จากค่าที่เราประกาศ in step 1
//     return (
//         <div>
//             <h1>Products</h1>
//             {/* โจทย์ บ่ายคือ ทำ search product เรื่อง paren and children*/}
//             <Search onSearchHandler={onSearchHandler} />

//             {/* โจทย์ต่อไป ต่อบ่ายให้ กด detail แล้วแสดงผลที่ search bar ตรงนี้ */}
//             <div className='border rounded-2xl shadow-md bg-white p-6 my-4 text-left'>
//                 {/* <p className='text-gray-400'>Show product detail when select</p> */}
//                 <Card
//                     key={selectedProduct.id}
//                     title={selectedProduct.title}
//                     imgUrl={selectedProduct.thumbnail}
//                     description={selectedProduct.description}>
//                 </Card>
//             </div>
            
//             <div className='grid grid-cols-2 gap-2'>
//             {
//                 // step 5 เป็นจาก product data ให้render products into card components
//                 products.map(product => (
//                     // console.log(product)
//                     <Card
//                         key={product.id}
//                         title={product.title}
//                         imgUrl={product.thumbnail}
//                         description={product.description}>
//                             <button
//                                 onClick={() => setSelectedProduct(product)}
//                                 className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow">
//                                 Detail
//                             </button>
//                     </Card>
//                 ))
//             }
//             </div>
            
//             { /* 0. simple debug info */ }
//             {/* <pre>
//                 {JSON.stringify(products, null, 2)}
//             </pre> */}
//         </div>
//     )
// }


// === refactor ที่โค้ดตามอาจารย์ ใส่เงื่อนไข if ตอนกด detail

export default function Products() {
    // 0. define state to store products
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [matched, setMatched] = useState(null);
    const className = {
        panel: 'border rounded-2xl shadow-md bg-white p-6 my-4 text-left',
        panelH3: 'text-2xl font-bold mb-4 text-black',
        panelImg: 'w-full h-64 object-cover mb-4 rounded-lg',
        panelDescription: 'text-blue-700 mb-4',
        panelPlaceholder: 'text-blue-400'
    }

    const onSearch = (value) => {
        const newFilter = products.filter(p => p.description.toLowerCase().includes(value.toLowerCase()))
        setFilteredProducts(newFilter);
        // setMatched(filteredProducts.length)
    }

    // 2. Loading data from API
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products)
                setMatched(data.products.length)
            });
    }, [])
    // when filtered change -> update Match lenge
    useEffect(() => {
        setMatched(filteredProducts.length)
    }, [filteredProducts])

    return (
        <div>
            <h1>Products</h1>
            <Search onSearch={onSearch} matched={matched} />
            <div className={className.panel}>
                {
                    selectedProduct ? (
                        <div>
                            <h3 className={className.panelH3}>
                                {selectedProduct.title}
                            </h3>
                            <img
                                src={selectedProduct.images[0]}
                                alt={selectedProduct.title}
                                className={className.panelImg} />
                            <p
                                className={className.panelDescription}>
                                    {selectedProduct.description}
                            </p>
                        </div>
                    ) : (
                        <p className={className.panelPlaceholder}>Show product detail when select</p>
                    )
                }
                {/* {
                    <pre className='text-gray-400'>{JSON.stringify(selectedProduct)}</pre>
                } */}
            </div>
            <div className='grid grid-cols-2 gap-2'>
            {
                // 4. render products into card components
                filteredProducts.map(product => (
                    // console.log(product)
                    <Card
                        key={product.id}
                        title={product.title}
                        imgUrl={product.thumbnail}
                        description={product.description}>
                            <button
                                className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow cursor-pointer"
                                onClick={() => setSelectedProduct(product)}>
                                Detail
                            </button>
                    </Card>
                ))
            }
            </div>
            
            { /* 0. simple debug info */ }
            {/* <pre>
                {JSON.stringify(products, null, 2)}
            </pre> */}
        </div>
    )
}