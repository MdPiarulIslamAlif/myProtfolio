
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Navbar from "../../Component/Navbar/Navbar";
import MyProject from "./MyProject/MyProject";

const Home = () => {
     return (
       <div >
         <Navbar />
         <Header />
         <MyProject />
         <Footer />
       </div>
     );
};

export default Home;