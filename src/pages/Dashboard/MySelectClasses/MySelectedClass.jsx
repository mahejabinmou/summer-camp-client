
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { loadStripe } from "@stripe/stripe-js";
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
  console.log(selectedClasses);
  console.log(user?.email);
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
                    selectedClasses.map((user) => <tr key={user._id} >

                        <th><img className="w-12 h-12 rounded-full object-cover object-center " src={user.image} alt="" /></th>
                        {/* <th>{user.bookedStudentEmail}</th> */}
                        <th>{user.image}</th>
                        <td>{user.name}</td>
                        <th>{user.instructor}</th>
                        <td>{user.price}</td>
                        <td>
                            <Link to={`/dashboard/payment/${user._id}`}  className="btn btn-outline btn-success btn-xs"><FaDollarSign/>Pay</Link>
                             </td>
                        <td><button>remove</button></td>



                    </tr>)
                }


            </tbody>
        </table>
    );
};

export default MySelectedClass;