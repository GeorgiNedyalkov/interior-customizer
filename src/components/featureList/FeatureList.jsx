import { useState } from "react";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { featuresList } from "../../data/featuresList";
import "./FeatureList.css";

const FeatureList = () => {
  return (
    <div className="features">
      <h1 className="title">What are your preferred features?</h1>
      <p className="description">
        After you’ve made a reservation, one of our Design Advisors will be in
        touch to help you finalize your selections.
      </p>

      <AddiontionalFeature />
    </div>
  );
};

const AddiontionalFeature = () => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
    console.log(isSelected);
  };

  const toggleIsFavorite = () => {
    setIsFavorite(!isFavorite);
    console.log(isFavorite);
  };

  return (
    <>
      {featuresList.map((feature) => {
        const { id, icon, title } = feature;

        return (
          <div className="feature-section" key={id}>
            <div className="fc-top">
              <div className="fc-left">
                {icon}
                <h2 className="feature-title">{title}</h2>
              </div>
              <AiOutlineDown />
            </div>

            <div className="fc-bottom">
              {feature.features.map((feature) => (
                <div
                  onClick={toggleIsSelected}
                  className={`sub-feature ${isSelected && "selected"}`}
                >
                  <h2 className="sb-title">
                    {feature.title}
                    <AiOutlineHeart
                      className="heart-icon"
                      onClick={toggleIsFavorite}
                    />
                  </h2>
                  <div className="sb-details">
                    <p>${feature.price.toLocaleString()}</p>
                    <p style={{ color: "green" }}>Details</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FeatureList;
