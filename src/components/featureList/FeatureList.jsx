import { useState } from "react";
import { AiOutlineDown, AiOutlineHeart } from "react-icons/ai";
import { useFeature } from "../../context/featureContext";
import { featuresList } from "../../data/featuresList";
import "./FeatureList.css";

const FeatureList = () => {
    return (
        <div className="features">
            {featuresList.map((feature) => {
                return <PrimaryFeature key={feature.id} {...feature} />;
            })}
        </div>
    );
};

const PrimaryFeature = ({ icon, name, subfeatures }) => {
    const [showFeature, setShowFeature] = useState(false);
    console.log(subfeatures);

    return (
        <div className="feature-section">
            <div
                className="fc-top"
                onClick={() => setShowFeature(!showFeature)}
            >
                <div className="fc-left">
                    {icon}
                    <h4 className="feature-title">{name}</h4>
                </div>
                <AiOutlineDown />
            </div>

            <div className="fc-bottom">
                {showFeature &&
                    subfeatures.map((subfeature, index) => {
                        return <SubFeature key={index} {...subfeature} />;
                    })}
            </div>
        </div>
    );
};

const SubFeature = ({ name, price, slides }) => {
    const [isSelected, setIsSelected] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);

    const { selectFeature } = useFeature();

    return (
        <div
            onClick={() => {
                setIsSelected(!isSelected);
                selectFeature(slides);
            }}
            className={`sub-feature ${isSelected && "selected"}`}
        >
            <div className="sb-top">
                <h2 className="sb-title">{name}</h2>
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
