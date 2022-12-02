import { useState } from "react";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { featuresList } from "../../data/featuresList";
import Button from "../button/Button";
import "./FeatureList.css";

const FeatureList = () => {
  const [showFeature, setShowFeature] = useState({
    outdoor: false,
    design: false,
    enterntainment: false,
    health: false,
    luxuries: false,
  });

  const handleChangeFeature = (category) => {
    setShowFeature((prevState) => ({
      ...prevState,
      [category]: !prevState[category],
    }));
  };

  return (
    <div className="features">
      <h1 className="title">What are your preferred features?</h1>
      <p className="description">
        After you’ve made a reservation, one of our Design Advisors will be in
        touch to help you finalize your selections.
      </p>

      <div className="features-section">
        {featuresList.map((feature) => {
          const { id, icon, title } = feature;

          return (
            <div
              className="feature-section"
              key={id}
              onClick={handleChangeFeature}
            >
              <div className="fc-top">
                <div className="fc-left">
                  {icon}
                  <h2 className="feature-title">{title}</h2>
                </div>
                <AiOutlineDown />
              </div>

              <div className="fc-bottom">
                {/* SubFeature */}

                {showFeature && (
                  <div className="sub-feature">
                    {feature.features.map((feature) => (
                      <div
                        className="sub-feature"
                        onClick={() => console.log(feature.title)}
                      >
                        <h2 className="sb-title">
                          {feature.title}
                          <AiOutlineHeart className="heart-icon" />
                        </h2>
                        <p>{`$${feature.price.toLocaleString()}`}</p>
                        <p style={{ color: "green" }}>Details</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <Button>Continue</Button>
    </div>
  );
};

export default FeatureList;
