import { Routes, Route } from "react-router-dom";
import Size from "./pages/size/Size";
import Designer from "./pages/designer/Designer";
import Features from "./pages/features/Features";
import AddOns from "./pages/add-ons/AddOns";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Error from "./pages/error/Error";
import AvailableHomes from "./pages/availableHomes/AvailableHomes";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Routes>
                <Route path="/">
                    <Route index element={<Dashboard />} />
                    <Route path="/size" element={<Size />} />
                    <Route path="/designer" element={<Designer />} />
                    <Route path="/features" element={<Features />} />
                    <Route path="/addons" element={<AddOns />} />
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/available-homes"
                        element={<AvailableHomes />}
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
