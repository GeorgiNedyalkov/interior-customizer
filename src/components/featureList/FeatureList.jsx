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
        return <PrimaryFeature {...feature} />;
      })}
    </div>
  );
};

const PrimaryFeature = ({ icon, title, id, features }) => {
  const [showFeature, setShowFeature] = useState(false);

  return (
    <div
      className="feature-section"
      key={id}
      onClick={() => setShowFeature(!showFeature)}
    >
      <div className="fc-top">
        <div className="fc-left">
          {icon}
          <h2 className="feature-title">{title}</h2>
        </div>
        <AiOutlineDown />
      </div>

      {showFeature && (
        <div className="fc-bottom">
          {features.map((feature) => (
            <SubFeature {...feature} />
          ))}
        </div>
      )}
    </div>
  );
};

const SubFeature = ({ title, price }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleIsSelected = () => {
    setIsSelected(!isSelected);
  };

  const toggleIsFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div
      onClick={toggleIsSelected}
      className={`sub-feature ${isSelected && "selected"}`}
    >
      <h2 className="sb-title">
        {title}
        <AiOutlineHeart
          className={`heart-icon ${isFavorite && "favorite"}`}
          onClick={toggleIsFavorite}
        />
      </h2>
      <div className="sb-details">
        <p>${price.toLocaleString()}</p>
        <p style={{ color: "green" }}>Details</p>
      </div>
    </div>
  );
};

export default FeatureList;
