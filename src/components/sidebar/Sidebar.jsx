import "./Sidebar.css"
import Button from "../button/Button"
import Feature from "../feature/Feature"
import { homeList, addOns, designerList } from "../../data/featuresList"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu />
      <FeatureList />
    </div>
  )
}

const FeatureList = () => {
  return (
    <div className="features">
      <Feature title="" />
    </div>
  )
}

const DesignerList = () => {
  return (
    <>
      <h1 className="title">Who is your preferred designer?</h1>
      <p className="description">
        Choose Nabr’s design, which you can make your own with custom features,
        or premium packages from world-class designers. Furnishings not
        included.
      </p>

      <div className="features">
        {designerList.map((designer) => {
          return (
            <Feature
              title={designer.title}
              price={designer.type}
              comingSoon={false}
            />
          )
        })}
      </div>
      <Button>Continue</Button>
    </>
  )
}

const AddOnList = () => {
  return (
    <>
      <h1 className="title">Do you need parking or storage?</h1>

      <div className="feautres">
        {addOns.map(({ title, price, icon }) => {
          return (
            <Feature
              title={title}
              price={`$${price.toLocaleString()}`}
              icon={icon}
            />
          )
        })}
      </div>
      <Button>See available homes</Button>
    </>
  )
}

const HomeList = () => {
  return (
    <>
      <h1 className="title">What size home are you looking for?</h1>
      <div className="features">
        {homeList.map(({ title, price, icon }) => {
          return (
            <Feature
              title={title}
              price={`$${price.toLocaleString()}`}
              icon={icon}
            />
          )
        })}
      </div>
      <Button>Continue</Button>
    </>
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
