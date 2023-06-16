// import { useEffect, useState } from "react";
// import useAuth from "../../../hooks/useAuth";


// const PaymentHistory = () => {
//     const { user } = useAuth();
//     const [histories, setHistories] = useState([]);
    

//     useEffect(() => {
//         fetch(`/enrolled/payment/${user?.email}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setHistories(data)
//             })
//     }, [])
//     return (
//         <div>
//             <h2>history</h2>
//         </div>
//     );
// };

// export default PaymentHistory;