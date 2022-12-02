import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Slider from "../../components/slider/Slider";
import DesignerList from "../../components/designerList/DesignerList";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

const Designer = () => {
  return (
    <div className="designer">
      <Navbar />
      <div className="main">
        <Slider />
        <div className="sidebar">
          <Sidebar>
            <DesignerList />
            <Button>
              <Link to="/features" className="link">
                Continue
              </Link>
            </Button>
          </Sidebar>
        </div>
      </div>
    </div>
  );
};

export default Designer;
