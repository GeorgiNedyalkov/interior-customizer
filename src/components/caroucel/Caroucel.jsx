import "./Caroucel.css";
import { useState, useEffect } from "react";
import { FcCdLogo } from "react-icons/fc";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Badge from "../badge/Badge";
import { terraceSlides } from "../../data/featuresList";

const Caroucel = ({ subfeature }) => {
  const [subSlides, setSubslides] = useState(terraceSlides);

  return (
    <div className="slider">
      <Slide slides={terraceSlides} />;
    </div>
  );
};

const Slide = ({ slides, name }) => {
  const [index, setIndex] = useState(0);
  const [slideImage, setSlideImage] = useState("");

  useEffect(() => {
    const lastIndex = slides.length - 1;

    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index]);

  return (
    <>
      {slides.map((s, sIndex) => {
        const { id, img, details, options } = s;

        let position = "nextSlide";

        if (sIndex === index) {
          position = "activeSlide";
        }

        if (sIndex === index - 1 || (index === 0 && sIndex === s.length - 1)) {
          position = "lastSlide";
        }

        return (
          <figure key={id} className={position}>
            <Badge name={name} />

            {slideImage ? (
              <img src={slideImage} alt="" />
            ) : (
              <img src={img} alt="" />
            )}

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
                    <button
                      className="option-btn"
                      onClick={() => {
                        setSlideImage(option.img);
                      }}
                    >
                      {option.name}
                    </button>
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
      })}
    </>
  );
};

export default Caroucel;
