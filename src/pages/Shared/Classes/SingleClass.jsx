


const SingleClass = ({ item,handleAddToCart }) => {
    const { image, name, instructor, price, available_seats } = item;
  console.log(item);
  
  
    return (
        <div>
            <div className="card card-compact p-2 m-8 w-80 bg-base-100 shadow-xl">
                <figure><img src={image} className="w-12 h-12" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2>Class Name: {name}</h2>
                    <h1>Instructor name: {instructor}</h1>
                    <p>Available seats: {available_seats}</p>
                    <p>Price: {price}</p>
                    
                        <button onClick={()=>handleAddToCart(item)} className="btn btn-primary">Select Button</button>
                    
                </div>
            </div>
        </div>
    );
};

export default SingleClass;

