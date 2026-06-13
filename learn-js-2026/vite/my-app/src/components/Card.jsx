function Card({ imgUrl, title, description, children }) {
    // const { imgUrl } = props;
    // const imgUrl = 'src/assets/images/captan.jpg'
    // pass title and description as argument
    // const title = 'Captain'
    // const description = 'So Smart'

    const className = {
        card: 'card flex flex-row rounded-2xl shadow-md overflow-hidden bg-white max-w-2xl mt-3',
        img: 'w-24 h-full object-cover',
        cardBody: 'card-body flex flex-col justify-between flex-1 p-6 text-left',
        title: 'text-xl font-bold mb-2 text-black text-left',
        description: 'text-gray-600 text-left',
        cardButton: 'card-button flex justify-end',
        button: 'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg shadow'
    }

    return (
        <div className={className.card}>
            <img src={imgUrl} className={className.img} />
            <div className={className.cardBody}>
                <div>
                    <h3 className={className.title}>{title}</h3>
                    <p className={className.description}>{description}</p>
                </div>
                { 
                // เดิมที ต้องใส่แบบนี้ แต่เราจะเอา childen มาใช้แทน
                    // <button className={className.button}> 
                    // Watch
                    // </button> 
                }
                {/* // โดยเอาไปเขียนข้างนอก */}
                {children}
                
            </div>
        </div>
    );
}
export default Card