import SidebarMenu from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Displayer from "../../components/displayer/Displayer";
import HomeList from "../../components/homeList/HomeList";
import Slider from "../../components/slider/Slider";

const Size = () => {
  return (
    <div className="size">
      <Navbar />
      <div className="home">
        <Slider />
        {/* <Displayer /> */}
        <div className="sidebar">
          <SidebarMenu />
          <HomeList />
        </div>
      </div>
    </div>
  );
};

export default Size;
