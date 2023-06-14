
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";



const ManageClasses = () => {
    const [classes, setClasses] = useState([]);
    console.log(classes);

    useEffect(() => {
        fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
    }, [])

   

    const handleAproved = (user) => {
        fetch(`https://summer-camp-server-side-mahejabinmou.vercel.app/classes/approved/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    //   refetch();
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
        fetch(`https://summer-camp-server-side-mahejabinmou.vercel.app/classes/denied/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    //   refetch();
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

    console.log(classes);


    return (
        

        <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>

                    <th>Class Name:</th>
                    <th>Instructor Name:</th>
                    <th>Instructor Email:</th>

                    <th>Available Seats</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                    <th>Feedback </th>
                </tr>
            </thead>
            <tbody>
                {
                    classes.map((user) => <tr key={user._id} >

                        <th><img className="w-12 h-12 rounded-full object-cover object-center " src={user.image} alt="" /></th>
                        <th>{user.name}</th>
                        <th>{user.instructor}</th>
                        <td>{user.email}</td>
                        <td>{user.available_seats}</td>
                        <td>{user.price}</td>
                        <td>{user.role}</td>

                        <td>
                           


                            {user.role == 'approved' ? 'Approved' :
                                <button className="bg-green-300  rounded" onClick={() => handleAproved(user)}>approved</button>
                            }

                            {user.role == 'denied ' ? 'Denied' :
                                <button className="bg-green-300 p-0 m-2 rounded" onClick={() => handleDeny(user)}>denied</button>

                            } </td>

                        <Link to={`/dashboard/feedback/${user._id}`} className="bg-success rounded p-0 m-2">Send Feedback</Link>



                    </tr>)
                }


            </tbody>
        </table>
        
    );
};

export default ManageClasses;