import "./Sidebar.css"
import Button from "../button/Button"
import Feature from "../feature/Feature"
import { featureList } from "../../data/featuresList"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu />

      <h1 className="title">Do you need parking or storage?</h1>

      <div className="home-types">
        {featureList.map(({ title, price, icon }) => {
          return <Feature title={title} price={price} icon={icon} />
        })}
      </div>

      <Button>Continue</Button>
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
