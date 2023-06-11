import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const {data: users=[],refetch}=useQuery(['users'],async()=>{
 
        const res= await fetch('https://summer-camp-server-side-mahejabinmou.vercel.app/users')
        return res.json();
    })
    return (
        <div>
        {users.length}
        </div>
    );
};

export default AllUsers;