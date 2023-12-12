import { motion } from "framer-motion";

const ContractInfo = () => {
  return (
    <div>
      <motion.h1 className="text-4xl mt-24 mb-12 font-bold text-center border-orange-600 border-b-4 w-64 mx-auto ">
        Contract Info
      </motion.h1>
      <div className=" flex flex-col w-[600px] mx-auto space-y-4 justify-center  mb-24">
        <motion.h1
          initial={{ y: 80 }}
          animate={{ x: 10, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileInView={{
            scaleX: 0.5,
          }}
          whileHover={{ scaleX: 0.8 }}
          className="text-3xl font-noto font-medium">
          Email: mdpiarulislamalif@gmail.com
        </motion.h1>
        <motion.h1
          initial={{ y: 80 }}
          animate={{ x: 10, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileInView={{
            scaleX: 0.5,
            scaleY: 1,
          }}
          whileHover={{ scaleX: 0.8 }}
          className="text-3xl font-noto font-medium">
          Phone: 01607369102
        </motion.h1>
        <motion.h1
          initial={{ y: 80 }}
          animate={{ x: 10, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileInView={{
            scaleX: 0.5,
            scaleY: 1,
          }}
          whileHover={{ scaleX: 0.8 }}
          className="text-3xl font-noto font-medium">
          Facebook: Md Alif islam
        </motion.h1>
        <motion.h1
          initial={{ y: 80 }}
          animate={{ x: 10, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileInView={{
            scaleX: 0.5,
            scaleY: 1,
          }}
          whileHover={{ scaleX: 0.8 }}
          className="text-3xl font-noto font-medium">
          LinkedIn: Md Piarul islam Alif
        </motion.h1>
      </div>
    </div>
  );
};

export default ContractInfo;
