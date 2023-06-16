import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SinglePopular from "./SinglePopular";
import { useEffect, useState } from "react";


const PopularClasses = () => {
    const { user, loading } = useAuth();
    // const [axiosSecure]=useAxiosSecure();
    const [popularClasses, setPopularClasses] = useState([])

    // const {data: popularClasses =[] } = useQuery({
    //     queryKey:["classes", user?.email],
    //     enabled: !loading,
    //         queryFn: async()=>{
    //             const res= await 
    //             fetch(`${import.meta.env.VITE_API_URL}/popularClasses`);
    //             return res.json();


    //         },

    // });

    useEffect(() => {
        fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/popularClasses')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])
        console.log(popularClasses);


    return (

        <div>
            <h2 className="text-4xl text-center font-bold my-6">Popoular Classes</h2>
            <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    <th>#</th>
                     <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Available Seats:</th>
                    <th>Enroll</th>
                    <th>Price:</th>

                </tr>
            </thead>
            <tbody>


                {
                    popularClasses.map(popularClass => <tr key={popularClass._id}>
                       <td></td>
                        <td><img src={popularClass.image} className="w-12 h-12 rounded-lg" alt="" /></td>
                        <td>{popularClass.name} </td>
                        <td>{popularClass.email}</td>
                        <td>{popularClass.seats}</td>
                        <td>{popularClass.enroll}</td>
                        <td>{popularClass.price}</td>
                    </tr>)
                }


            </tbody>
        </table>
        </div>
    
    );
};

export default PopularClasses;