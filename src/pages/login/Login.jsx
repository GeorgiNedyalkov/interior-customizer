const Login = () => {
  return (
    <div className="login">
      <div className="left">
        {/* LOGO */}
        <img src="" alt="" />
        <h1>Your City, Your Home</h1>
      </div>
      <div className="right">
        <h3>Log In</h3>
        <p>
          don't have an account? <a href="/singup">Sign up</a>
        </p>
        <button>Google</button>
        <button>Apple</button>
        <hr />
        <form action="">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" placeholder="john.doe@gmail.com" />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
