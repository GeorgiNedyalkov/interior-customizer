import SidebarMenu from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Displayer from "../../components/displayer/Displayer";
import HomeList from "../../components/homeList/HomeList";

const Size = () => {
  return (
    <div className="size">
      <Navbar />
      <div className="home">
        <Displayer />
        <div className="sidebar">
          <SidebarMenu />
          <HomeList />
        </div>
      </div>
    </div>
  );
};

export default Size;
