import "./Sidebar.css";
import { useState } from "react";
import Button from "../button/Button";
import Feature from "../feature/Feature";
import { homeList, addOns, designerList, featuresList } from "../../data/data";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarMenu />
      <HomeList />
    </div>
  );
};

const FeatureList = () => {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div className="features">
      <h1 className="title">What are your preferred features?</h1>
      <p className="description">
        After you’ve made a reservation, one of our Design Advisors will be in
        touch to help you finalize your selections.
      </p>

      {featuresList.map((feature) => (
        <>
          <div
            className="feature-section"
            onClick={() => setShowFeature(!showFeature)}
          >
            <div className="fc-top">
              <div className="fc-left">
                {feature.icon}
                <h2 className="feature-title">{feature.title}</h2>
              </div>
              <AiOutlineDown />
            </div>
            <div className="fc-bottom">
              {feature.features.map((feature) => (
                <div className="sub-feature">
                  <h2 className="sb-title">
                    {feature.title}
                    <AiOutlineHeart className="heart-icon" />
                  </h2>
                  <p>{`$${feature.price.toLocaleString()}`}</p>
                  <p style={{ color: "green" }}>Details</p>
                </div>
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

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
          );
        })}
      </div>
      <Button>Continue</Button>
    </>
  );
};

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
          );
        })}
      </div>
      <Button>See available homes</Button>
    </>
  );
};

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
          );
        })}
      </div>
      <Button>Continue</Button>
    </>
  );
};

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

export default Sidebar;
