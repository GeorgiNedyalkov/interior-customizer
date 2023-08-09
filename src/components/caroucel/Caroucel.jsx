import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useFeature } from "../../context/featureContext";
import Badge from "../Badge/Badge";
import Popup from "../Popup/Popup";
import "./Caroucel.css";

const Caroucel = () => {
    return (
        <div className="slider">
            <Slide />;
        </div>
    );
};

const Slide = ({ name }) => {
    const { featuresContext } = useFeature();
    const [slides, setSlides] = useState(featuresContext);
    const [index, setIndex] = useState(0);
    const [slideImage, setSlideImage] = useState("");
    const [slideCaption, setSlideCaption] = useState("");

    console.log(slides);

    useEffect(() => {
        const lastIndex = slides.length - 1;

        if (index < 0) {
            setIndex(lastIndex);
        }

        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, slides]);

    return (
        <>
            {slides.map((s, sIndex) => {
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

                        {s.popups &&
                            s.popups.map((popup, index) => {
                                return (
                                    <Popup
                                        key={index}
                                        ancor={popup.ancor}
                                        title={popup.title}
                                        topPosition={popup.topPosition}
                                        leftPosition={popup.leftPosition}
                                    >
                                        {popup.desc}
                                    </Popup>
                                );
                            })}

                        {slideImage ? (
                            <img src={slideImage} alt="" />
                        ) : (
                            <img src={img} alt="" />
                        )}

                        {index > 0 && (
                            <button
                                className="prev"
                                onClick={() => setIndex(index - 1)}
                            >
                                <FiChevronLeft />
                            </button>
                        )}

                        {index !== s.length - 1 && (
                            <button
                                className="next"
                                onClick={() => setIndex(index + 1)}
                            >
                                <FiChevronRight />
                            </button>
                        )}

                        <figcaption className="slider-caption">
                            {slideCaption ? slideCaption : details}

                            {options && (
                                <div className="options">
                                    {options.map((option, optionIndex) => (
                                        <button
                                            key={option}
                                            className="option-btn"
                                            onClick={() => {
                                                setSlideImage(option.img);
                                                setSlideCaption(option.caption);
                                            }}
                                        >
                                            {option.name}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <Dots slides={slides} setIndex={setIndex} />
                        </figcaption>
                    </figure>
                );
            })}
        </>
    );
};

export default Caroucel;

const Dots = ({ slides, setIndex }) => {
    return (
        <div className="dot-container">
            {slides.length > 1 &&
                slides.map((s, slideIndex) => {
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
    );
};
