import image from "../../assets/profile-image/alif-removebg-preview.png";
import { Typewriter } from "react-simple-typewriter";

const Text = () => {
  return (
    <div className="max-w-screen-2xl mx-auto flex items-center">
      <h1 className="flex-1" 
        style={{
          paddingTop: "5rem",
          margin: "auto 0",
          marginTop: "150px",
          fontWeight: "bold",
          fontSize: "50px",
        }}>
        HELLO,
        <br />
        I'M _
        <span style={{ color: "red", fontWeight: "bold" }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={["PIARUL ISLAM ALIF", "WEB DEVELOPER"]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <div className="">
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default Text;
