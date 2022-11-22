import { useState } from "react";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { featuresList } from "../../data/data";

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
            key={feature.id}
            onClick={() => setShowFeature(!showFeature)}
          >
            <div className="fc-top">
              <div className="fc-left">
                {feature.icon}
                <h2 className="feature-title">{feature.title}</h2>
              </div>
              <AiOutlineDown />
            </div>

            {showFeature && (
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
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default FeatureList;
