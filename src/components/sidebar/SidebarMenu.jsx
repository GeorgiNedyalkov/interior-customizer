import { NavLink } from "react-router-dom";
import "./SidebarMenu.css";

const SidebarMenu = () => {
  let activeStyle = {
    borderBottom: "2px solid black",
  };

  return (
    <div className="sidebar-menu">
      <ul className="categories">
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Size</li>
        </NavLink>
        <NavLink
          to="/designer"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Designer</li>
        </NavLink>
        <NavLink
          to="/features"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Features</li>
        </NavLink>
        <NavLink
          to="/addons"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <li>Add-Ons</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SidebarMenu;
