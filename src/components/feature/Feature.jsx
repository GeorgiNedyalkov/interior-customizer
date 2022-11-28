import "./Feature.css";
import { AiOutlineHeart } from "react-icons/ai";

const Feature = ({ id, price, title, icon, img }) => {
  return (
    <div className="feature" key={id} onClick={() => console.log(title)}>
      <div className="feature-left">
        <div>{icon}</div>
        <div className="feature-details">
          <h3 className="feature-title">{title}</h3>
          <p className="feature-price">Starting at {price}</p>
        </div>
      </div>
      <div className="feature-right">
        <AiOutlineHeart className="heart-icon" />
      </div>
    </div>
  );
};

export default Feature;
