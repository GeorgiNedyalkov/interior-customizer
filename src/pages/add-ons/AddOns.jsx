import React from "react";
import { addOns } from "../../data/data";
import Feature from "../../components/feature/Feature";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Displayer from "../../components/displayer/Displayer";

const AddOns = () => {
  return (
    <div className="addons">
      <Navbar />
      <Displayer />
      <h1 className="title">Do you need parking or storage?</h1>
      <div className="sidebar">
        <div className="feautres">
          {addOns.map(({ title, price, icon }) => {
            return (
              <Feature
                title={title}
                price={`$${price.toLocaleString()}`}
                icon={icon}
              />
            );
          })}
        </div>
        <Button>See available homes</Button>
      </div>
    </div>
  );
};

export default AddOns;
