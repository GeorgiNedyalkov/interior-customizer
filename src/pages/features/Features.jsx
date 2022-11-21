import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Displayer from "../../components/displayer/Displayer";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import FeatureList from "../../components/featureList/FeatureList";

const Features = () => {
  return (
    <div className="features">
      <Navbar />
      <div className="home">
        <Displayer />
        <div className="sidebar">
          <SidebarMenu />
          <FeatureList />
        </div>
      </div>
    </div>
  );
};

export default Features;
