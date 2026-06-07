import hero from '../assets/hero.png'

function Card(props, children) {
    console.log(props);
    console.log();
    console.log(props.title);
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
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
            <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
            <br />
            {img1 ? <img src={img1} alt="Card Image" /> : <p>No image available</p>}
            {img2 ? <img src={img2} alt="Card Image" /> : <p>No image available</p>}
            
            </div>
        </div>
        </div>
    );
}

export default Card;