// import React from "react";
// import Signupcomponents from "../component/Signup/Signupcomponents";
// import logindata from "../data/logindata";
// import Sectiononesignup from "../component/Signup/Sectiononesignup";

// function Login() {
//   return (
// <div className="container-fluid mb-5 mt-5">
//     <div className="row">
//   <div className="col-lg-6 col-md-6 col-sm-12 col-12">
//   <Sectiononesignup />
// </div>
//       <div className="col-lg-6 col-md-6 col-sm-12 col-12">
//       <Signupcomponents data={logindata} />
//       </div>

//     </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Sectiononesignup from "../component/Signup/Sectiononesignup";
import "../style/signup.css";
import "../style/login.css";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    localStorage.setItem("isLoggedIn", "true");
    window.dispatchEvent(new Event("storage"));

    if (email === storedEmail && password === storedPassword) {
      localStorage.setItem("isLoggedIn", true); 
      setError("");
      navigate("/"); 
    } else {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="container-fluid mb-5 mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12">
          <Sectiononesignup/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 login-container-col">
          <div className="login-container">
            <h2>Login To Exclusive</h2>
            <p>Enter your details below</p>
            <input
              type="email"
              placeholder="Email or phone number"
              className="input-sign-up form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-container">
            <input
              type="password"
              placeholder="password"
              className="input-sign-up form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button className="btn btn-danger" onClick={handleLogin}>
            Log In
          </button>
          <NavLink className="text-danger text-decoration-none ms-5" to="/forget-password">Forget password?</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
