import { useState } from "react";
import "./Feature.css";
import { AiOutlineHeart } from "react-icons/ai";

const Feature = ({ id, price, title, icon, img }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isSelected, setIsSelected] = useState(false);

    return (
        <div
            onClick={() => setIsSelected(!isSelected)}
            className={`feature ${isSelected && "selected"}`}
            key={id}
        >
            <div className="feature-left">
                <div>{icon}</div>
                <div className="feature-details">
                    <h3 className="feature-title">{title}</h3>
                    <p className="feature-price">Starting at {price}</p>
                </div>
            </div>
            <div className="feature-right">
                <AiOutlineHeart
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`heart-icon ${isFavorite && "favorite"}`}
                />
            </div>
        </div>
    );
};

export default Feature;
