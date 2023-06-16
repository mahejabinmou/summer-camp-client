import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import { MdLightMode } from "react-icons/md";
import './Home.css'
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructor from "../../../PopularInstructor/PopularInstructor";


const Home = () => {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    useEffect(() => {
      document.body.className = theme;
    }, [theme]);
  
    return (
        <div className={`Home ${theme}`}>
            <div className="text-center grid md:grid-cols-2 my-6">
                <h1 className="text-2xl font-bold text-green-200 ">Change Theme</h1>
               <button className="text-green-500" onClick={toggleTheme}><MdLightMode/></button>
            </div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <Features></Features>
        </div>
    );
};

export default Home;