
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";

import { FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";


const MySelectedClass = () => {
    const { user } = useAuth()
  const [axiosSecure] = useAxiosSecure();
  const {
    data: selectedClasses = [],
    refetch,
    isLoading,
  } = useQuery(["selectedClassesByStudents", user?.email], async () => {
    const res = await axiosSecure.get(`/selected?email=${user?.email}`);
    return res.data;
  });
//   console.log(selectedClasses);
//   console.log(user?.email);
    return (
        <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                     <th>Image</th>
                    <th>Class:</th>
                    <th>Instructor Name:</th>
                    <th>Price:</th>
                    <th>Pay</th>
                   <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {
                    selectedClasses.map((singleClass) => <tr key={singleClass._id} >

                        <th><img className="w-12 h-12 rounded-full object-cover object-center " src={user.image} alt="" /></th>
                        {/* <th>{user.bookedStudentEmail}</th> */}
                        <th><img src={singleClass.image} alt="" /></th>
                        <td>{singleClass.name}</td>
                        <th>{singleClass.instructor}</th>
                        <td>{singleClass.price}</td>
                        <td>
                            <Link to={`/dashboard/payment/${singleClass._id}`}  
                            state={singleClass}
                            className="btn btn-outline btn-success btn-xs"><FaDollarSign/>Pay Now</Link>
                             </td>
                        <td><button>remove</button></td>



                    </tr>)
                }


            </tbody>
        </table>
    );
};

export default MySelectedClass;