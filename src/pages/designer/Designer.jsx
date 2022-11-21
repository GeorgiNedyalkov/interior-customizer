import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Displayer from "../../components/displayer/Displayer";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import DesignerList from "../../components/designerList/DesignerList";

const Designer = () => {
  return (
    <div>
      <Navbar />
      <div className="home">
        <Displayer />
        <div className="sidebar">
          <SidebarMenu />
          <DesignerList />
        </div>
      </div>
    </div>
  );
};

export default Designer;
