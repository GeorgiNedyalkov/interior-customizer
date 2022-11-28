import { useState } from "react";
import "./Modal.css";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="modal">
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={isOpen ? "modal-btn closed" : "modal-btn"}
        >
          Finishes
          {isOpen ? (
            <AiFillMinusCircle className="modal-icon closed" />
          ) : (
            <AiFillPlusCircle className="modal-icon" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="modal-desc">
          <p className="modal-desc-text">
            The copper-nickel finish of the terrace extends the metal accents of
            interior hardware fixtures to the outdoors.
          </p>
        </div>
      )}
    </div>
  );
};

export default Modal;
