import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import FeatureList from "../../components/featureList/FeatureList";

const Features = () => {
  return (
    <div>
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <SidebarMenu />
          <FeatureList />
        </div>
      </div>
    </div>
  );
};

export default Features;
