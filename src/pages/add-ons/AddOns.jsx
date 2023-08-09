import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import AddOnList from "../../components/AddOnList/AddOnList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import { HeroImage } from "../../components/HeroImage/HeroImage";

const AddOns = () => {
    return (
        <div className="addons">
            <Navbar />
            <div className="main">
                <HeroImage />
                <div className="sidebar">
                    <Sidebar>
                        <h1 className="title">
                            Do you need parking or storage?
                        </h1>
                        <AddOnList />
                        <Link to="/available-homes">
                            <Button>See available homes</Button>
                        </Link>
                    </Sidebar>
                </div>
            </div>
        </div>
    );
};

export default AddOns;
