import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import DesignerList from "../../components/designerList/DesignerList";
import { designerList } from "../../data/data";

const Designer = () => {
  return (
    <div className="designer">
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <SidebarMenu />
          <DesignerList />
        </div>
      </div>
    </div>
  );
};

export default Designer;
