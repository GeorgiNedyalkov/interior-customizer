import "./App.css"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home">
        <div className="displayer">
          <img
            className="display-img"
            src="https://images.nabr.com/display?path=ConfigOptions/SOFA1/design_studio_default_carousel_image.webp&h=0&w=1200&op=resize"
            alt=""
          />
        </div>
        <div className="sidebar">
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
