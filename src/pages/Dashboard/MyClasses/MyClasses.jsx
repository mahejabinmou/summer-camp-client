

const MyClasses = () => {
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      {
        <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Total Enrolled Students</th>
              <th>Status</th>
              <th>Update button.</th>
              <th>Feedback </th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            
            
          </tbody>
        </table>
      </div>
      }
    </tbody>
  </table>
</div>
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