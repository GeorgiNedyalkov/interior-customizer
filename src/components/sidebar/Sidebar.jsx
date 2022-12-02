import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ children }) => {
  return (
    <div>
      <SidebarMenu />
      <div className="sidebar">
        <div className="sidebar-wrapper">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;
