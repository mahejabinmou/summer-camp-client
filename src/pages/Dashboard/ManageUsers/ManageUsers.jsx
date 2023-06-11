import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {

        const res = await fetch('http://localhost:4000/users')
        return res.json();
    })

    const handleMakeAdmin=(user)=>{
       fetch(`http://localhost:4000/users/admin/${user._id}`,{
        method:'PATCH',
       })
       .then(res=>res.json())
       .then(data=>{
        console.log(data)
        if(data.modifiedCount){
            refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
       })
    }

    const handleMakeinstructor=(user)=>{
        fetch(`http://localhost:4000/users/instructor/${user._id}`,{
         method:'PATCH',
        })
        .then(res=>res.json())
        .then(data=>{
         console.log(data)
         if(data.modifiedCount){
             refetch();
             Swal.fire({
                 position: 'top-end',
                 icon: 'success',
                 title: `${user.name} is an Instructor now!`,
                 showConfirmButton: false,
                 timer: 1500
               })
         }
        })
     }
    return (

        <div className="w-full">
            <h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user,index)=><tr key={user._id} >
                                
                                <th>{index}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role == 'admin'? 'admin':
                                <button className="bg-green-300 rounded" onClick={()=>handleMakeAdmin(user)}>MakeAdmin</button>
                        }</td>

                        {/* instructor */}
                        <td>{user.role == 'instructor'? 'instructor':
                                <button className="bg-green-300 rounded" onClick={()=>handleMakeinstructor(user)}>MakeInstructor</button>
                        }</td>
                        
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageUsers;