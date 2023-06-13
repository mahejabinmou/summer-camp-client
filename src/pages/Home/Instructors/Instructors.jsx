import { useEffect, useState } from "react";



const Instructors = () => {

    const [instructors,setInstructors]=useState([])
     useEffect(()=>{
         fetch('https://summer-camp-client-side-f6866.web.app/instructor')
         .then(res=>res.json())
         .then(data=>setInstructors(data))
   },[])

    return (
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              {/* <th>Image</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>feedback</th>
              
            </tr>
          </thead>
          <tbody>
            
           
              {
                instructors.map(instructor=><tr key={instructor._id}>
                   <th>{instructor.name}</th>
                                {/* <th>{instructor.image}</th> */}
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