
import { useEffect, useState } from "react";
import ClassItem from "./ClassItem";

const AllClasses = () => {
    const [classes,setClasses]=useState([]);
    useEffect(()=>{
        fetch(`classes.json`)
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return (
        <div>
            <div className="grid md:grid-cols-3">
            {
                    classes.map(item=><ClassItem
                    key={item._id}
                    item={item}
                    ></ClassItem>)
                }
            </div>
        </div>
    );
};

export default AllClasses;