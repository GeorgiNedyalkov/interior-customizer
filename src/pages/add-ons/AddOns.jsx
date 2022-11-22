import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import AddOnList from "../../components/addOnList/addOnList";
import Slider from "../../components/slider/Slider";

const AddOns = () => {
  return (
    <div className="addons">
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <SidebarMenu />
          <AddOnList />
        </div>
      </div>
    </div>
  );
};

export default AddOns;
