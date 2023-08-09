import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Button from "../../components/Button/Button";
import "./Error.css";

const Error = () => {
    return (
        <>
            <Navbar />
            <div className="error">
                <h1 className="title">404 Page not Found</h1>
                <p>Sorry, the page you are looking for cannot be found.</p>
                <Link to="/">
                    <Button>Go Back</Button>
                </Link>
            </div>
        </>
    );
};

export default Error;
