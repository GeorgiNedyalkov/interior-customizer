import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="nav-title">
                <h1>Interior Customiser</h1>
            </Link>
        </div>
    );
};

export default Navbar;
