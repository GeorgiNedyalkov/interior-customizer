import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import DesignerList from "../../components/designerList/DesignerList";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { standardDesign } from "../../data/data";
import { DesignContext, DesignContextSource } from "../../context/context";

const Designer = () => {
  const [selectedDesign, setSelectedDesign] = useState(standardDesign);

  return (
    <DesignContext.Provider value={DesignContextSource()}>
      <div className="designer">
        <Navbar />
        <div className="main">
          <Slider />
          <div className="sidebar">
            <Sidebar>
              <DesignerList
                selected={selectedDesign}
                setSelected={setSelectedDesign}
              />
              <Button>
                <Link to="/features" className="link">
                  Continue
                </Link>
              </Button>
            </Sidebar>
          </div>
        </div>
      </div>
    </DesignContext.Provider>
  );
};

export default Designer;
