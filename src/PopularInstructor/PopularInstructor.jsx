import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";


const PopularInstructor = () => {
    const { user, loading } = useAuth();
    // const [axiosSecure]=useAxiosSecure();
    const [popularInstructors, setPopularInstructors] = useState([])
    useEffect(() => {
        fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/popularClasses')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])
    console.log(popularInstructors);
    return (
        <div>
            <h2 className="text-4xl text-center font-bold my-6">Popoular Instructors</h2>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>Class</th>
                        <th>Name</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>


                    {
                        popularInstructors.map(popularInstructor => <tr key={popularInstructor._id}>
                            {/* <td></td> */}
                            <td><img src={popularInstructor.image} className="w-12 h-12 rounded-lg" alt="" /></td>
                            <td>{popularInstructor.name} </td>
                            <td>{popularInstructor.email}</td>

                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default PopularInstructor;