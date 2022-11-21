import "./App.css";
import Size from "./pages/size/Size";
import Designer from "./pages/designer/Designer";
import Features from "./pages/features/Features";
import AddOns from "./pages/add-ons/AddOns";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Size />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/features" element={<Features />} />
            <Route path="/addons" element={<AddOns />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
