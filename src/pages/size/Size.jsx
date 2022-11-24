import SidebarMenu from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import HomeList from "../../components/homeList/HomeList";
import Slider from "../../components/slider/Slider";
import { bigDesign } from "../../data/data";
import "./Size.css";

const Size = () => {
  return (
    <div className="size">
      <Navbar />
      <div className="main">
        <div className="slider">
          <Slider />
        </div>
        <div className="sidebar">
          <SidebarMenu />
          <HomeList />
        </div>
      </div>
    </div>
  );
};

export default Size;
