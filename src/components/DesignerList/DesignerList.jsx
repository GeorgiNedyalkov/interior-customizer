import "./DesignerList.css";
import { designerList } from "../../data/data";
import { AiOutlineHeart } from "react-icons/ai";
import { useDesign } from "../../context/designContext";

const DesignerList = () => {
    return (
        <ul>
            {designerList.map((designer) => (
                <Designer key={designer.id} {...designer} />
            ))}
        </ul>
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
