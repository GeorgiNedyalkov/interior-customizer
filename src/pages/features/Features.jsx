import "./Features.css";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import FeatureList from "../../components/FeatureList/FeatureList";
import Button from "../../components/button/Button";
import Caroucel from "../../components/caroucel/Caroucel";
import { Link } from "react-router-dom";
import { highDesignFeatures } from "../../data/featuresList";
import { FeatureProvider } from "../../context/featureContext";

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(highDesignFeatures);

    return (
        <FeatureProvider>
            <div>
                <Navbar />
                <div className="main">
                    <Caroucel />
                    <div className="sidebar">
                        <Sidebar>
                            <h1 className="title">
                                What are your preferred features?
                            </h1>
                            <p className="description">
                                After you’ve made a reservation, one of our
                                Design Advisors will be in touch to help you
                                finalize your selections.
                            </p>
                            <FeatureList
                                selected={selectedFeature}
                                setSelected={setSelectedFeature}
                            />
                            <Button>
                                <Link to="/addOns" className="link">
                                    Continue
                                </Link>
                            </Button>
                        </Sidebar>
                    </div>
                </div>
            </div>
        </FeatureProvider>
    );
};

export default Features;
