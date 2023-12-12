import Banner from "../../Component/Banner/Banner";
import Footer from "../../Component/Footer/Footer";
import Navbar from "../../Component/Navbar/Navbar";
import MyProject from "./MyProject/MyProject";

const Home = () => {
     return (
       <div>
         <Navbar />
         <Banner />
         <MyProject />
         <Footer />
       </div>
     );
};

export default Home;