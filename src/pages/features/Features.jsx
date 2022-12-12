import "./Features.css";
import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import FeatureList from "../../components/featureList/FeatureList";
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
