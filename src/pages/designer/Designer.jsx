import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import DesignerList from "../../components/designerList/DesignerList";
import Sidebar from "../../components/sidebar/Sidebar";

const Designer = () => {
  return (
    <div className="designer">
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <Sidebar>
            <DesignerList />
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Designer;
