
import {Link, useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const { error} = useRouteError();
    
    return (
        <div className='text-center m-10'>
        <div className='text-center'>
        <h4 className='text-8xl  text-rose-500'>404</h4>
        <p className='text-2xl'>
            <i>{error?.statusText || error?.message}</i>
        </p>
        <img className='w-[200px] mx-auto my-4' src="https://i.ibb.co/8s0ZKr9/error.jpg"  alt="" />
        </div>
        <Link to="/"><button className='bg-secondary text-white rounded p-4 text-3xl'>Back to home</button></Link>
        
    </div>
    );
};

export default ErrorPage;