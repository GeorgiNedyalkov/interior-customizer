import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import "./Popup.css";

const Popup = ({ children, ancor, title, topPosition, leftPosition }) => {
    const [isOpen, setIsOpen] = useState(false);

    const icon = isOpen ? (
        <AiFillMinusCircle className="icon icon-closed" />
    ) : (
        <AiFillPlusCircle className="icon icon-open" />
    );

    return (
        <div className="popup" style={{ top: topPosition, left: leftPosition }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`btn-title ${isOpen ? "btn-close" : "btn-open"}`}
            >
                {title} {icon}
            </button>
            {isOpen && <div className={`desc ${ancor}`}>{children}</div>}
        </div>
    );
};

export default Popup;
