import "./Sidebar.css";
import SidebarMenu from "./SidebarMenu";

const Sidebar = ({ children }) => {
  return (
    <div>
      <SidebarMenu />
      <div className="sidebar">{children}</div>
    </div>
  );
};

export default Sidebar;
