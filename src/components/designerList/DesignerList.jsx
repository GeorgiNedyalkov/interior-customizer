import "./DesignerList.css";
import { designerList } from "../../data/data";
import { AiOutlineHeart } from "react-icons/ai";
import { useDesign } from "../../context/context";

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
        <Designer key={designer.id} {...designer} />
      ))}
    </>
  );
};

export default DesignerList;

const Designer = ({ id, title, img, type, design }) => {
  const { selectDesign, isSelected } = useDesign();

  return (
    <div
      onClick={() => {
        selectDesign(design);
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
