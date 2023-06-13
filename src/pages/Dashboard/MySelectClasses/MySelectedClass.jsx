import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";


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
                        <td></td>



                    </tr>)
                }


            </tbody>
        </table>
    );
};

export default MySelectedClass;