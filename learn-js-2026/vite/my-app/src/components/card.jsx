import hero from '../assets/hero.png'

function Card({img="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp", title, description}, children) {
    console.log(img);
    console.log(title);
    console.log(description);
    const styleBody = {
        backgroundColor : 'red',
    }
    // import image ได้ 3 แบบ และอย่าตั้งชื่อซ้ำกัน
    const img1 = 'src/assets/Screenshot.png'
    const img2 = hero
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src={img}
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <br />
            {img1 ? <img src={img1} alt="Card Image2" /> : <p>No image available</p>}
            {/* {img2 ? <img src={img2} alt="Card Image3" /> : <p>No image available</p>} */}
            
            </div>
        </div>
        </div>
    );
}

export default Card;