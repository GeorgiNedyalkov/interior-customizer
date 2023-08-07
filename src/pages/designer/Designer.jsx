import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import DesignerList from "../../components/DesignerList/DesignerList";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { DesignProvider } from "../../context/context";

const Designer = () => {
    return (
        <DesignProvider>
            <Navbar />
            <div className="main">
                <Slider />
                <div className="sidebar">
                    <Sidebar>
                        <h1 className="title">
                            Who is your preferred designer?
                        </h1>
                        <p className="description">
                            Choose Nabr’s design, which you can make your own
                            with custom features, or premium packages from
                            world-class designers. Furnishings not included.
                        </p>
                        <DesignerList />
                        <Button>
                            <Link to="/features" className="link">
                                Continue
                            </Link>
                        </Button>
                    </Sidebar>
                </div>
            </div>
        </DesignProvider>
    );
};

export default Designer;
