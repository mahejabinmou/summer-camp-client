
import { motion } from "framer-motion";
const Features = () => {
    return (
        <motion.div
      className="box bg-green-100 text-black"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}>
            <h2 className="text-center my-10">What you get <br /> <span className="text-4xl">See our features</span></h2>
            <div className="grid grid-cols-3 gap-8 my-4 p-4">
            <div>
                <div>
                <h2 className="text-2xl text-success">01. High Experience</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">02. Qualified Teachers</h2>
                <p>I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">03. Effective programs</h2>
                <p> Including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            </div>
           <div className="w-full"> 
            <img className="w-[800px] h-[400px]" src="https://i.ibb.co/JFjsj8z/guitar-photo.png" alt="" /></div>
            <div>
            <div>
                <h2 className="text-2xl text-success">04. Awards and certificates</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">05. Own musical instruments</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            <div>
                <h2 className="text-2xl text-success">06. Affordable price</h2>
                <p>Throughout my life, I have been involved in a plethora of extracurricular activities, including swimming and student council. However, no activity has had a more noticeable and extraordinary impact on my life than my involvement in music.</p>
            </div>
            </div>
            
        </div>
        </motion.div>
    );
};

export default Features;