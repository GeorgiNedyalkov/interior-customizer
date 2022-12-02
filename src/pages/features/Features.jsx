import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Sidebar from "../../components/sidebar/Sidebar";
import FeatureList from "../../components/featureList/FeatureList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./Features.css";

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <Sidebar>
            <FeatureList />
            <Button>
              <Link to="/addOns" className="link">
                Continue
              </Link>
            </Button>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Features;
