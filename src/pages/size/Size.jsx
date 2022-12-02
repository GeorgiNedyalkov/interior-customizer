import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import HomeList from "../../components/homeList/HomeList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./Size.css";

const Size = () => {
  return (
    <div className="size">
      <Navbar />
      <div className="main">
        <img
          className="slider"
          src="https://images.nabr.com/display?path=ConfigOptions/SOFA1/design_studio_default_carousel_image.webp&h=0&w=1200&op=resize"
          alt=""
        />
        <div className="sidebar">
          <Sidebar>
            <HomeList />
            <Button>
              <Link to="/designer" className="link">
                Continue
              </Link>
            </Button>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Size;
