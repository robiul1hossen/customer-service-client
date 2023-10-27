import "./Signup.css";
const Signup = () => {
  return (
    <div className="login-page-bg">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <a href="#" type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
        </form>
      </div>
    </div>
  );
};

export default Signup;
