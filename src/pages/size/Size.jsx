import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Displayer from "../../components/displayer/Displayer"

const Size = () => {
  return (
    <div className="size">
      <Navbar />
      <div className="home">
        <Displayer />
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default Size
