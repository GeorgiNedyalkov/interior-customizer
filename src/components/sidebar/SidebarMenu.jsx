import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <ul className="categories">
        <Link to="/">
          <li>Size</li>
        </Link>
        <Link to="/designer">
          <li>Designer</li>
        </Link>
        <Link to="/features">
          <li>Features</li>
        </Link>
        <Link to="/addons">
          <li>Add-Ons</li>
        </Link>
      </ul>
    </div>
  );
};

export default SidebarMenu;
