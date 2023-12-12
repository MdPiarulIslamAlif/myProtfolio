import {motion} from 'framer-motion'
import { LuDownload } from "react-icons/lu";
import profile from "../../../assets/profile-image/alif.jpg"

const CvDownload = () => {
  return (
    <div className="max-w-screen-2xl mx-auto mt-[550px] md:36 lg:mt-40 my-24 ">
      <div className=" flex flex-col md:flex-row lg:flex-row  justify-center items-center gap-10">
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className="flex-1  md:[300px] lg:w-[500px] bg-orange-500 p-1 md:p-2 lg:p-5 rounded-b-lg  " src={profile} alt="profile" />
          </figure>
          <div className="card-body"></div>
        </div>
        <div className=" w-full md:w-[500px] lg:w-[700px] space-y-10 ">
          <h2 className=" w-full lg:text-3xl font-noto font-bold text-red-700 mb-10">
            Inquisitive and passionate about emerging technology. Inquisitive
            and passionate about emerging technology.
          </h2>
          <p className="text-lg font-medium">
            Greetings! I'm Md Piarul Islam, a Frontend Web Developer well-versed
            in HTML, CSS, Tailwind, JavaScript, React, and MongoDB. My passion
            lies in crafting seamless and visually appealing user interfaces.
            Driven by curiosity and enthusiasm for the latest technologies, I
            constantly seek to enhance my skills and stay ahead in the dynamic
            field of web development. On a professional note, I specialize in
            translating design concepts into interactive and responsive
            websites. My proficiency extends to leveraging technologies like
            React and MongoDB to create engaging user experiences. Looking
            forward to contributing to the ever-evolving world of web
            development and bringing innovative ideas to life.
          </p>
          <motion.button 
          initial={{y:-80}}
          animate={{x:10, y:10}}
          transition={{duration:0.6, delay:0.3}}
          whileInView={{
               y:-200,
               x:20, y:0,
               duration:0.10, delay:0.3
          }}
          className="btn btn-warning mt-10">
            <LuDownload />
            Download CV
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CvDownload;
