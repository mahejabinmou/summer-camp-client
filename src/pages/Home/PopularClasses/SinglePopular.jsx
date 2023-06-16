

const SinglePopular = ({pClass}) => {
    const {image,name,instructor,available_seats,price,email}=pClass;
    console.log(pClass);
    return (
        
            <div className="card card-compact w-80  bg-base-100 shadow-xl">
                       <div className="card-body">
                         <h3 className="card-title">Class Name: {name}</h3>
                         <h2>Instructor Name: {instructor}</h2>
                         <p>Instructor Email: {email}</p>
                         <p>Available Seats: {available_seats}</p>
                        <p>Price: {price}</p>
                        
                            </div>
                     </div>
        
    );
};

export default SinglePopular;