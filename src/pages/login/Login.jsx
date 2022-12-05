import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <main className="login">
      <div className="left">
        <a href="#" className="logo">
          Logo
        </a>
        <h1 className="title-login">
          Your City,
          <br /> Your Home
        </h1>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="header">
            <h3>
              <Link to="/dashboard">Log In</Link>
            </h3>
            <p className="text">
              Don't have an account?{" "}
              <a href="/singup" className="text" style={{ fontWeight: "bold" }}>
                Sign up
              </a>
            </p>
          </div>
          <div className="singin-btns">
            <button className="signin-btn">Google</button>
            <button className="signin-btn">Apple</button>
          </div>
          <hr className="line" />
          <div className="singin-form">
            <form action="">
              <label htmlFor="email" className="text">
                Email
              </label>
              <br />
              <input
                id="email"
                type="text"
                placeholder="john.doe@gmail.com"
                require
              />
              <br />
              <button className="signin-btn" type="submit">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
