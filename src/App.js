import Size from "./pages/size/Size";
import Designer from "./pages/designer/Designer";
import Features from "./pages/features/Features";
import AddOns from "./pages/add-ons/AddOns";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Size />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/designer" element={<Designer />} />
            <Route path="/features" element={<Features />} />
            <Route path="/addons" element={<AddOns />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
