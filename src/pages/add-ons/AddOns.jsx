import React from "react";
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
                        <Button>See available homes</Button>
                    </Sidebar>
                </div>
            </div>
        </div>
    );
};

export default AddOns;
