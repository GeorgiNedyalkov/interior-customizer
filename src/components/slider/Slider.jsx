import "./Slider.css";
import { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Badge from "../badge/Badge";
import Popup from "../popup/Popup";

const Slider = ({ design }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = design.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div className="slider">
      {design.map((slide, slideIndex) => {
        const { id, image, caption, name } = slide;

        let position = "nextSlide";
        if (slideIndex === index) {
          position = "activeSlide";
        }
        if (
          slideIndex === index - 1 ||
          (index === 0 && slideIndex === design.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <figure key={id} className={`${position}`}>
            <Badge name={name} />

            {/* Popups */}
            {slide.popups &&
              slide.popups.map((popup) => {
                return (
                  <Popup
                    ancor={popup.ancor}
                    title={popup.title}
                    topPosition={popup.topPosition}
                    leftPosition={popup.leftPosition}
                  >
                    {popup.desc}
                  </Popup>
                );
              })}

            {/* Slides */}
            <img src={image} alt="" />
            {index > 0 && (
              <button className="prev" onClick={() => setIndex(index - 1)}>
                <FiChevronLeft />
              </button>
            )}
            {index !== design.length - 1 && (
              <button className="next" onClick={() => setIndex(index + 1)}>
                <FiChevronRight />
              </button>
            )}

            {/* Caption */}
            <figcaption className="slider-caption">
              {caption}
              <div className="dot-container">
                {design.map((s, slideIndex) => {
                  return (
                    <div
                      key={slideIndex}
                      className="dot"
                      onClick={() => setIndex(slideIndex)}
                    >
                      &#8226;
                    </div>
                  );
                })}
              </div>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default Slider;
