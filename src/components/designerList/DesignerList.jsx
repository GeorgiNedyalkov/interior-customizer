import "./DesignerList.css";
import { useState } from "react";
import { designerList } from "../../data/data";
import { AiOutlineHeart } from "react-icons/ai";

const DesignerList = () => {
  return (
    <>
      <h1 className="title">Who is your preferred designer?</h1>
      <p className="description">
        Choose Nabr’s design, which you can make your own with custom features,
        or premium packages from world-class designers. Furnishings not
        included.
      </p>

      {designerList.map((designer) => (
        <Designer {...designer} />
      ))}
    </>
  );
};

export default DesignerList;

const Designer = ({ id, title, img, type }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={() => setIsSelected(!isSelected)}
      className={`designer-section ${isSelected && "selected"}`}
      key={id}
    >
      <div className="designer-left">
        <img className="designer-img" src={img} alt={title} />
        <div className="designer-details">
          <div className="designer-title">{title}</div>
          <div className="design-type">{type.toString()}</div>
        </div>
      </div>
      <AiOutlineHeart
        onClick={() => setIsFavorite(!isFavorite)}
        className={`heart-icon ${isFavorite && "favorite"}`}
      />
    </div>
  );
};
