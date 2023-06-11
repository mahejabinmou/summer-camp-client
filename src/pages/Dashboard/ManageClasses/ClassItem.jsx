import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ClassItem = ({ item }) => {
  

  const { image, name, email, instructor, role, price, available_seats } = item;
  console.log(image);

  const { data: classes = [], refetch } = useQuery(['classes'], async () => {

    const res = await fetch('http://localhost:4000/classes')
    return res.json();
  })


  const handlePending = (user) => {
    fetch(`http://localhost:4000/classes/pending/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is pending !`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }

  const handleAproved = (user) => {
    fetch(`http://localhost:4000/classes/approved/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is Aproved !`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }
  const handleDeny = (user) => {
    fetch(`http://localhost:4000/classes/denied/${user._id}`, {
      method: 'PATCH',
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} is Denied !`,
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
  }


  

  return (
    <div>
      {
         classes.map((user) => 
         <div key={user._id}>
          <div className="card card-compact w-80  bg-base-100 shadow-xl">
            <div className="w-[150px] h-[150px] mx-auto "><img src={image} /></div>
            <div className="card-body">
              <h3 className="card-title">Class Name: {name}</h3>
              <h2>Instructor Name: {instructor}</h2>
              <p>Instructor Email: {email}</p>
              <p>Available Seats: {available_seats}</p>
              <p>Price: {price}</p>
              
              <>{user.role == 'pending' ? 'pending' :
                  <button className="bg-green-300 rounded" onClick={() => handlePending(user)}>pending</button>
                }</>

                <>{user.role == 'approved' ? 'approved' :
                  <button className="bg-green-300 rounded" onClick={() => handleAproved(user)}>approved</button>
                }</>

                <>{user.role == 'denied' ? 'denied' :
                  <button className="bg-green-300 rounded" onClick={() => handleDeny(user)}>denied</button>
                }</>




             
              <button className="btn btn-success">Feedback</button>
            </div>
          </div>
        </div>

        )


      }
    </div>
  );
};

export default ClassItem;