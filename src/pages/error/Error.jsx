import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Error.css";

const Error = () => {
    return (
        <>
            <Navbar />
            <div className="error">
                <h1 className="title">404</h1>
                <p>Sorry, Your page is not found...</p>
                <p>Click on the logo to go back to dashboard.</p>
            </div>
        </>
    );
};

export default Error;
