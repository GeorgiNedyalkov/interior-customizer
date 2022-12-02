import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AddOnList from "../../components/addOnList/addOnList";
import Sidebar from "../../components/sidebar/Sidebar";
import { addOns } from "../../data/data";

const AddOns = () => {
  console.log(addOns);
  return (
    <div className="addons">
      <Navbar />
      <div className="main">
        <div className="slider">
          <img
            className="slider"
            src="https://images.nabr.com/display?path=ConfigOptions/SOFA1/design_studio_default_carousel_image.webp&h=0&w=1200&op=resize"
            alt=""
          />
        </div>
        <div className="sidebar">
          <Sidebar>
            <AddOnList />
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
