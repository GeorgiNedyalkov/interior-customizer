import "./DesignerList.css";
import { useState } from "react";
import {
  designerList,
  kattyDesign,
  bigDesign,
  standardDesign,
} from "../../data/data";

import { AiOutlineHeart } from "react-icons/ai";
import Button from "../button/Button";

const DesignerList = () => {
  const [design, setDesign] = useState(standardDesign);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <h1 className="title">Who is your preferred designer?</h1>
      <p className="description">
        Choose Nabr’s design, which you can make your own with custom features,
        or premium packages from world-class designers. Furnishings not
        included.
      </p>

      {designerList.map((designer) => {
        const { id, title, img, type } = designer;

        return (
          <div
            className={`designer-section ${isSelected && "selected"}`}
            key={id}
            onClick={() => console.log(title)}
          >
            <div className="designer-left">
              <img className="designer-img" src={img} alt={title} />
              <div className="designer-details">
                <h2 className="designer-title">{title}</h2>
                <p className="design-type">{type.toString()}</p>
              </div>
            </div>
            <AiOutlineHeart className="heart-icon" />
          </div>
        );
      })}

      <Button>Continue</Button>
    </>
  );
};

export default DesignerList;
