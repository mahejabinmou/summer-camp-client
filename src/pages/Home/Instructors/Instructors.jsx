import { useEffect, useState } from "react";



const Instructors = () => {

    const [instructors,setInstructors]=useState([])
     useEffect(()=>{
         fetch('https://summer-camp-server-side-three.vercel.app/instructor')
         .then(res=>res.json())
         .then(data=>{
            console.log(data);
            setInstructors(data)})
   },[])

    return (
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
               <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>feedback</th>
              
            </tr>
          </thead>
          <tbody>
            
           
              {
                instructors.map(instructor=><tr key={instructor._id}>
                   <th>{instructor.name}</th>
                                 <th><img src={instructor.image} alt="" /></th>
                                <th>{instructor.email}</th>
                                <td>{instructor.name}</td>
                                <td>feedback</td>
                                     </tr>)
              }
            
            
          </tbody>
        </table>
    );
};

export default Instructors;