import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Sidebar from "../../components/sidebar/Sidebar";
import FeatureList from "../../components/featureList/FeatureList";
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
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Features;
