import { useEffect, useState } from "react";
import SingleClass from "./singleClass";
import Swal from "sweetalert2";


const Classes = () => {
    const [classes,setClasses]=useState([]);
    console.log(classes);

     useEffect(()=>{
          fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/classes/approved/all')
          .then(res=>res.json())
          .then(data=>setClasses(data))
    },[])

    const handleSelectedClass= (selected) => {
        console.log(selected);

        if(classes.user && classes.user?.email){
            fetch(`https://summer-camp-server-side-mahejabinmou.vercel.app/classes/selected`, {
            method: 'POST',
            headers:{
                'content-type':'application/json',
            },
            body: JSON.stringify(selected),
        })
            .then(res => res.json())
            .then(data => {
                
                if (data.insertedId) {
                       refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `class selected succesfully`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            });
        }
        else{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `class not selected succesfully`,
                showConfirmButton: false,
                timer: 1500
            });
        }

        }
    

    return (
        <div>
            {
                classes.map(item=><SingleClass key={item._id}
                item={item}
                handleSelectedClass={handleSelectedClass}>

                </SingleClass>)
            }
        </div>
    );
        
        };

export default Classes;
