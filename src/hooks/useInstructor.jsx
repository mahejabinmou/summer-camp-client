import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";




const useInstructor = () => {
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    // use axios secure with react query
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !!user?.email && !!localStorage.getItem("access-token"),
       
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading]
}
export default useInstructor;