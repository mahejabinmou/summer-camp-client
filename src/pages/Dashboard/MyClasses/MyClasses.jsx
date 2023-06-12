import { useEffect, useState } from "react";



const MyClasses = () => {
    const [classes,setClasses]=useState([]);
    console.log(classes);

     useEffect(()=>{
          fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/classes')
          .then(res=>res.json())
          .then(data=>setClasses(data))
    },[])

 
    return (
        
      
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Feedback </th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            
           
              {
                classes.map(user=><tr key={user._id}>
                   <th>{user.name}</th>
                                <th>{user.enrol}</th>
                                <td>{user.role}</td>
                                <td>feedback</td>
                                     </tr>)
              }
            
            
          </tbody>
        </table>
      
    );
};

export default MyClasses;


















// import { useEffect, useState } from "react";
// import ClassItem from "./ClassItem";
// const MyClasses = () => {
//     const [classes,setClasses]=useState([]);
//     console.log(classes);

//      useEffect(()=>{
//           fetch('https://summer-camp-server-side-gold.vercel.app/classes')
//           .then(res=>res.json())
//           .then(data=>setClasses(data))
//     },[])
//     return (
//         <div className="grid md:grid-cols-3 gap-4">
//             {classes?.map(item=><ClassItem
//                 key={item._id}
//                     item={item}>

//                 </ClassItem>)
//             }
//         </div>
//     );
// };

// export default MyClasses;