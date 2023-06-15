import { useEffect, useState } from "react";
import SingleClass from "./singleClass";
import Swal from "sweetalert2";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";


const Classes = () => {
    const [classes,setClasses]=useState([]);
    const {user}=useAuth();
    console.log(classes);

     useEffect(()=>{
          fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/classes/approved/all')
          .then(res=>res.json())
          .then(data=>setClasses(data))
    },[])

   
    const handleAddToCart = (data) => {
  const bookedStudentEmail=user?.email;
  data.bookedStudentEmail=bookedStudentEmail;
        axios.post('https://summer-camp-server-side-three.vercel.app/selected',data)
    .then(res=>{
        alert("data uploaded");
        console.log(res);
    

    })
    console.log(data);
            
        
   
}

    return (
        <div className="grid md:grid-cols-3 gap-4">
            {
                classes.map(item=><SingleClass key={item._id}
                item={item}
                handleAddToCart={handleAddToCart}>

                </SingleClass>)
            }
        </div>
    );
        
        };

export default Classes;
