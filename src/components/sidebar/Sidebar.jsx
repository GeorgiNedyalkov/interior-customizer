import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ children }) => {
  return (
    <div className="sidebar">
      <SidebarMenu />
      <div className="sidebar-wrapper">{children}</div>
    </div>
  );
};

export default Sidebar;
