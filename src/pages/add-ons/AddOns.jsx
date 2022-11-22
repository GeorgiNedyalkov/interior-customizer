import React from "react";
import Navbar from "../../components/navbar/Navbar";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import AddOnList from "../../components/addOnList/addOnList";
import Slider from "../../components/slider/Slider";
import { addOns } from "../../data/data";

const AddOns = () => {
  console.log(addOns);
  return (
    <div className="addons">
      <Navbar />
      <div className="main">
        <Slider designData={addOns} />
        <div className="sidebar">
          <SidebarMenu />
          <AddOnList />
        </div>
      </div>
    </div>
  );
};

export default AddOns;
