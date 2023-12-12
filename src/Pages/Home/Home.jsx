
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Navbar from "../../Component/Navbar/Navbar";
import ContractInfo from "./ContractInformation/ContractInfo";
import CvDownload from "./CvDwonload/CvDownload";
import MyProject from "./MyProject/MyProject";
import MySkill from "./MySkill/MySkill";

const Home = () => {
     return (
       <div >
         <Navbar />
         <Header />
         <CvDownload />
         <MySkill />
         <MyProject />
         <ContractInfo />
         <Footer />
       </div>
     );
};

export default Home;