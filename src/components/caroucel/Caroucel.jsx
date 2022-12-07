import "./Caroucel.css";
import { useState, useEffect } from "react";
import { FcCdLogo } from "react-icons/fc";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Badge from "../badge/Badge";

const Caroucel = ({ subfeatures }) => {
  return (
    <div className="slider">
      {subfeatures.map((sub, setSub) => {
        const { name, slides } = sub;

        return <Slide slides={slides} name={name} />;
      })}
    </div>
  );
};

const Slide = ({ slides, name }) => {
  const [index, setIndex] = useState(0);

  return (
    <>
      {slides.map((s, sIndex) => {
        return slides.map((s, sIndex) => {
          const { id, img, details, options } = s;

          let position = "nextSlide";

          if (sIndex === index) {
            position = "activeSlide";
          }

          if (
            sIndex === index - 1 ||
            (index === 0 && sIndex === s.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <figure key={id} className={position}>
              <Badge name={name} />
              <img src={img} alt="" />

              {index > 0 && (
                <button className="prev" onClick={() => setIndex(index - 1)}>
                  <FiChevronLeft />
                </button>
              )}
              {index !== s.length - 1 && (
                <button className="next" onClick={() => setIndex(index + 1)}>
                  <FiChevronRight />
                </button>
              )}

              <figcaption className="slider-caption">
                {details}

                {options && (
                  <div className="options">
                    {options.map((option, optionIndex) => (
                      <button className="option-btn">{option.name}</button>
                    ))}
                  </div>
                )}
                <div className="dot-container">
                  {slides.map((s, slideIndex) => {
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
        });
      })}
    </>
  );
};

export default Caroucel;
