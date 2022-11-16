import "./Sidebar.css"
import Button from "../button/Button"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu />
      <Button>See available homes</Button>
    </div>
  )
}

const SidebarMenu = () => {
  return (
    <div className="sidebar-menu">
      <ul className="categories">
        <li>Size</li>
        <li>Designer</li>
        <li>Features</li>
        <li>Add-Ons</li>
      </ul>
    </div>
  )
}

export default Sidebar
