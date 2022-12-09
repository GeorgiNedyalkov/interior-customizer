import "./DesignerList.css";
import { useState } from "react";
import { designerList } from "../../data/data";
import { AiOutlineHeart } from "react-icons/ai";
import { useDesign } from "../../context/context";

const DesignerList = ({ selected, setSelected }) => {
  return (
    <>
      <h1 className="title">Who is your preferred designer?</h1>
      <p className="description">
        Choose Nabr’s design, which you can make your own with custom features,
        or premium packages from world-class designers. Furnishings not
        included.
      </p>

      {designerList.map((designer) => (
        <Designer
          key={designer.id}
          {...designer}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </>
  );
};

export default DesignerList;

const Designer = ({ id, title, img, type, design, setSelected }) => {
  const { contextDesign, selectedDesign } = useDesign();

  console.log(contextDesign, selectedDesign);

  const [isSelected, setIsSelected] = useState(false);

  return (
    <div
      onClick={(e) => {
        setIsSelected(!isSelected);
        setSelected(design);
      }}
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
      <AiOutlineHeart className="heart-icon" />
    </div>
  );
};
