import { useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Badge from "../Badge/Badge";
import Popup from "../Popup/Popup";
import { useDesign } from "../../context/designContext";
import "./Slider.css";

const Slider = () => {
    const { contextDesign, sIndex, dispatch } = useDesign();

    useEffect(() => {
        const lastIndex = contextDesign.length - 1;

        if (sIndex < 0) {
            dispatch({ type: "SET_SLIDE_INDEX", payload: lastIndex });
        }

        if (sIndex > lastIndex) {
            dispatch({ type: "SET_SLIDE_INDEX", payload: 0 });
        }
    }, [sIndex, contextDesign, dispatch]);

    return (
        <div className="slider">
            {contextDesign.map((slide, slideIndex) => {
                const { id, image, caption, name } = slide;

                let position = "nextSlide";
                if (slideIndex === sIndex) {
                    position = "activeSlide";
                }
                if (
                    slideIndex === sIndex - 1 ||
                    (sIndex === 0 && slideIndex === contextDesign.length - 1)
                ) {
                    position = "lastSlide";
                }

                const slidePopups = slide.popups?.map((popup, index) => {
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
                });

                return (
                    <figure key={id} className={`${position}`}>
                        <Badge name={name} />

                        {/* Popups */}
                        {slide.popups && slidePopups}

                        {/* Slides */}
                        <img src={image} alt="" />
                        {sIndex > 0 && (
                            <button
                                className="prev"
                                onClick={() =>
                                    dispatch({
                                        type: "SET_SLIDE_INDEX",
                                        payload: sIndex - 1,
                                    })
                                }
                            >
                                <FiChevronLeft />
                            </button>
                        )}
                        {sIndex !== contextDesign.length - 1 && (
                            <button
                                className="next"
                                onClick={() =>
                                    dispatch({
                                        type: "SET_SLIDE_INDEX",
                                        payload: sIndex + 1,
                                    })
                                }
                            >
                                <FiChevronRight />
                            </button>
                        )}

                        {/* Caption */}
                        <figcaption className="slider-caption">
                            {caption}
                            <Dots />
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
};

export default Slider;

const Dots = () => {
    const { contextDesign, dispatch } = useDesign();
    return (
        <div className="dot-container">
            {contextDesign.map((s, slideIndex) => {
                return (
                    <div
                        key={slideIndex}
                        className="dot"
                        onClick={() =>
                            dispatch({
                                type: "SET_SLIDE_INDEX",
                                payload: slideIndex++,
                            })
                        }
                    >
                        &#8226;
                    </div>
                );
            })}
        </div>
    );
};
