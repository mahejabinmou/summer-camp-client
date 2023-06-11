import { useEffect, useState } from "react";


const UseClass = () => {
    const [classes,setClasses]=useState([true]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('classes.json')
        .then(res=>res.json())
        .then(data=>{
            setClasses(data)
            console.log(data);
        setLoading(false)
    })
    },[])
    return [classes,loading]
};

export default UseClass;