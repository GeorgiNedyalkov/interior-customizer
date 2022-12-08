import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import Sidebar from "../../components/sidebar/Sidebar";
import FeatureList from "../../components/featureList/FeatureList";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./Features.css";
import { outdoorLivingFeatures } from "../../data/featuresList";
import Caroucel from "../../components/caroucel/Caroucel";

const Features = () => {
  const [selectedFeature, setSelectedFeature] = useState(outdoorLivingFeatures);

  return (
    <div>
      <Navbar />
      <div className="main">
        <Caroucel subfeature={selectedFeature} />
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
  );
};

export default Features;
