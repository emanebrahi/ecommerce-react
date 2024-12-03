import React, { useState } from "react";
import '../style/login.css'

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgetPassword = () => {
    const storedEmail = localStorage.getItem("email");

    if (email === storedEmail) {
      setMessage("Password reset instructions have been sent to your email.");
    } else {
      setMessage("This email is not registered in our system.");
    }
  };

  return (
    <div className="container mt-5">
     <div className="w-50 m-auto text-center login-container">
     <h2>Forget Password</h2>
      <p>Enter your registered email to reset your password</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="form-control border-0"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="btn btn-danger mt-3" onClick={handleForgetPassword}>
        Submit
      </button>
      {message && <p className="mt-3">{message}</p>}
     </div>
    </div>
  );
}

export default ForgetPassword;
