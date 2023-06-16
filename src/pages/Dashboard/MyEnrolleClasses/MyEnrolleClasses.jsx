import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import EmptyState from "../../../EmptyState/EmptyState";


const MyEnrolleClasses = () => {
    const {user,loading}=useAuth();
    const [axiosSecure]=useAxiosSecure();
    
    const {data: myEnrolled =[] } = useQuery({
        queryKey:["enrolled", user?.email],
        enabled: !loading,
            queryFn: async()=>{
                const res= await axiosSecure.get(`/enrolled/payment/${user?.email}`);
                
                return res.data;
            },
        
    });

    console.log(myEnrolled);
    return (
        
          <div>
             {
           myEnrolled && myEnrolled.length > 0 && Array.isArray(myEnrolled)?
           (
          <div className="overflow-x-auto ">
            <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>class</th>
              <th>Class Name</th>
              <th>Instructor</th>
              <th>Instructor Email </th>
              <th>Price</th>
              </tr>
          </thead>
          <tbody>
            
           
 { myEnrolled.map((singleClass,index)=><tr key={singleClass._id}>
                                <td>{index +1}</td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12 ">
                                        <img src={singleClass?.image} alt="" />
                                        </div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>{singleClass.name}</td>
                                <td>{singleClass.instructor}</td>
                                <td>{singleClass.email}</td>
                                <td>{singleClass.price}</td>
                                     </tr>)
              }
            
            
          </tbody>
        </table>
          </div>
          ):
          (
          <EmptyState/>

           )}
          </div>
        
    )
};

export default MyEnrolleClasses;