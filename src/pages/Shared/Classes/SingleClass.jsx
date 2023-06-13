import Swal from "sweetalert2";


const SingleClass = ({ item,handleAddToCart }) => {
    const { image, name, instructor, price, available_seats } = item;
  console.log(item);
  
  
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure>Image:<img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {name}</h2>
                    <h1>Instructor name: {instructor}</h1>
                    <p>Available seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Select Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;

