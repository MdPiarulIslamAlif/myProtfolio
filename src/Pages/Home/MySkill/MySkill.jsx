import {motion} from "framer-motion"
import html from "../../../assets/skill/html.png"
import css from "../../../assets/skill/css.png"
import tailwind from "../../../assets/skill/taildind-removebg-preview.png"
import javascript from "../../../assets/skill/js.png"
import react from "../../../assets/skill/free-react-1-282599.webp"
import mongodb from "../../../assets/skill/mongo.png"
import Photoshop from "../../../assets/skill/Photoshop_CC_icon.png"
import figma from "../../../assets/skill/figma.png"
import illistrature from "../../../assets/skill/illeasturator.png"

const MySkill = () => {
     return (
       <div className="max-w-screen-2xl mx-auto">
         <motion.h1
           initial={{ y: 80 }}
           animate={{ x: 10, y: 10 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           whileInView={{
             y: -200,
             x: 20,
             y: 0,
             duration: 0.1,
             delay: 0.3,
           }}
           className="text-center text-4xl font-noto font-bold mb-24">
           My Skill
         </motion.h1>
         <motion.div className="flex flex-row justify-around bg-gray-300 p-4">
           <motion.div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={html}
               alt=""
             />
           </motion.div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={css}
               alt=""
             />
           </div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={tailwind}
               alt=""
             />
           </div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={javascript}
               alt=""
             />
           </div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={react}
               alt=""
             />
           </div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={mongodb}
               alt=""
             />
           </div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={Photoshop}
               alt=""
             />
           </div>
           <div className=" border-r-2 border-orange-600 p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={figma}
               alt=""
             />
           </div>
           <div className=" p-2">
             <motion.img
               whileHover={{ x: -20, y: 10 }}
               className="w-24 h-24"
               src={illistrature}
               alt=""
             />
           </div>
         </motion.div>
       </div>
     );
};

export default MySkill;