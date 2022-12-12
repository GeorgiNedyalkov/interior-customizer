import "./Size.css";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import HomeList from "../../components/homeList/HomeList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { HeroImage } from "../../components/heroImage/HeroImage";

const Size = () => {
  return (
    <div className="size">
      <Navbar />
      <div className="main">
        <HeroImage />
        <div className="sidebar">
          <Sidebar>
            <h1 className="title">What size home are you looking for?</h1>
            <p className="description">Select all that apply.</p>
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
