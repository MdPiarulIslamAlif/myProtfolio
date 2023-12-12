import Particles from "react-tsparticles";
import particeleConfig from "../ParticelConfig/ParticeleConfig";

const ParticelBg = () => {
     return (
       <div>
         <Particles params={particeleConfig}></Particles>
       </div>
     );
};

export default ParticelBg;