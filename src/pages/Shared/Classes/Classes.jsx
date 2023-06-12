import { useEffect, useState } from "react";
import SingleClass from "./singleClass";


const Classes = () => {
    const [classes,setClasses]=useState([]);
    console.log(classes);

     useEffect(()=>{
          fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/classes/approved/all')
          .then(res=>res.json())
          .then(data=>setClasses(data))
    },[])

    return (
        <div>
            {
                classes.map(item=><SingleClass key={item._id}
                item={item}>

                </SingleClass>)
            }
        </div>
    );
};

export default Classes;
