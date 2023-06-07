
import {  FaMusic } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-green-50 text-base-content">
            <div className='flex'>
                <p className='text-success  text-5xl  '><FaMusic></FaMusic></p>
                <p><span className='text-success'>Mahejabin's</span> <br /><span className=' text-emerald-500 text-3xl' >Music School</span></p>
            </div>
            <div className='text-success'>
                <span className="footer-title">Contact Us</span>
                <a className="link link-hover">550-345-456</a>
                <a className="link link-hover">musicschool@net</a>
            </div>
            <div className='text-success'>
                <span className="footer-title">Address</span>
                {/* <FaLocationArrow/>  */}
                <a className="link link-hover"> 04369,Dhaka Cantonemnt,Dhaka,12/4</a>
            </div>
            
            <div className='text-success'>
                <span className="">Copyright © 2023 - All right reserved by ACME Industries Ltd</span>
                
            </div>
        </footer>
    );
};

export default Footer;