
const ClassItem = ({item}) => {
    const {name,image,instructor,price,available_seats}=item;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-4">
  <figure><img src={image} /></figure>
  <div className="card-body">
    <h3 className="card-title">Class Name: {name}</h3>
    <h2>Instructor Name: {instructor}</h2>
    <p>Available Seats: {available_seats}</p>
    <p>Price: {price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">select</button>
    </div>
  </div>
</div>
    );
};

export default ClassItem;