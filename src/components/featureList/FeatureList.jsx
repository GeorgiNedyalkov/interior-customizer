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

      {featuresList.map((feature) => {
        return <PrimaryFeature key={feature.id} {...feature} />;
      })}
    </div>
  );
};

const PrimaryFeature = ({ icon, title, features }) => {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div className="feature-section">
      <div className="fc-top" onClick={() => setShowFeature(!showFeature)}>
        <div className="fc-left">
          {icon}
          <h4 className="feature-title">{title}</h4>
        </div>
        <AiOutlineDown />
      </div>

      <div className="fc-bottom">
        {showFeature && features.map((feature) => <SubFeature {...feature} />)}
      </div>
    </div>
  );
};

const SubFeature = ({ title, price }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={`sub-feature ${isSelected && "selected"}`}
    >
      <div className="sb-top">
        <h2 className="sb-title">{title}</h2>
        <AiOutlineHeart
          className={`heart-icon ${isFavorite && "favorite"}`}
          onClick={() => setIsFavorite(!isFavorite)}
        />
      </div>
      <div className="sb-details">
        <p>${price.toLocaleString()}</p>
        <p style={{ color: "green" }}>Details</p>
      </div>
    </div>
  );
};

export default FeatureList;
