import { useEffect, useState } from "react";
import ClassItem from "./ClassItem";



const ManageClasses = () => {
    const [classes,setClasses]=useState([]);
    console.log(classes);

     useEffect(()=>{
          fetch('https://summer-camp-server-side-three.vercel.app/classes')
          .then(res=>res.json())
          .then(data=>setClasses(data))
    },[])
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {classes?.map(item=><ClassItem
                key={item._id}
                    item={item}>

                </ClassItem>)
            }
        </div>
    );
};

export default ManageClasses;