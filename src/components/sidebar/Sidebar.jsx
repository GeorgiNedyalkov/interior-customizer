import "./Sidebar.css"
import Button from "../button/Button"
import Feature from "../feature/Feature"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu />

      <h1 className="title">Do you need parking or storage?</h1>

      <div className="home-types">
        <Feature title="One bedroom" price="$857,000" />
        <Feature title="Two bedroom" price="$1,000,000" />
        <Feature title="Three bedroom" price="$1,200,000" />
      </div>

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
        <li className="active">Add-Ons</li>
      </ul>
    </div>
  )
}

export default Sidebar
