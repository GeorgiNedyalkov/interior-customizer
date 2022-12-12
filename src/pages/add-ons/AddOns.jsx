import React from "react";
import Navbar from "../../components/navbar/Navbar";
import AddOnList from "../../components/addOnList/addOnList";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import { HeroImage } from "../../components/heroImage/HeroImage";

const AddOns = () => {
  return (
    <div className="addons">
      <Navbar />
      <div className="main">
        <HeroImage />
        <div className="sidebar">
          <Sidebar>
            <h1 className="title">Do you need parking or storage?</h1>
            <AddOnList />
            <Button>See available homes</Button>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default AddOns;
