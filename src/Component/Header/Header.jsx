import Banner from "../Banner/Banner";
import Text from "../Text/Text";

const Header = () => {
  return (
    <div>
      <div className="max-h-screen">
          <div className="absolute">
               <Banner />
          </div>
          <div className="relative">
               <Text />
          </div>
      </div>
    </div>
  );
};

export default Header;
