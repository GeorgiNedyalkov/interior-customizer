import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Displayer from "../../components/displayer/Displayer";
import SidebarMenu from "../../components/sidebar/SidebarMenu";
import AddOnList from "../../components/addOnList/addOnList";

const AddOns = () => {
  return (
    <div className="addons">
      <Navbar />
      <div className="home">
        <Displayer />
        <div className="sidebar">
          <SidebarMenu />
          <AddOnList />
        </div>
      </div>
    </div>
  );
};

export default AddOns;
