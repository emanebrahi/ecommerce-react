import React, { useState } from "react";
import "../../style/signup.css";
import { NavLink } from "react-router-dom";

function Signupcomponents({ data }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelChangeName = (event) => {
    const value = event.target.value;
    setName(value);
    localStorage.setItem("name", value);
  };

  const handelChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
    localStorage.setItem("email", value);
  };

  const handelChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
    localStorage.setItem("password", value);
  };

  return (
    <div className="sign-up-container">
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          
          {item.placeholderName && (
            <div>
              <input
                type="text"
                placeholder={item.placeholderName}
                className="input-sign-up form-control name-field"
                id="validationCustom01"
                required
                onChange={handelChangeName}
              />
              <div className="valid-feedback">Right</div>
            </div>
          )}
          
          <div>
            <input
              type="email"
              placeholder={item.placeholderEmail}
              className="input-sign-up form-control"
              id="validationCustom02"
              required
              onChange={handelChangeEmail}
            />
            <div className="valid-feedback">Right</div>
          </div>

          <div>
            <input
              type="password"
              placeholder={item.placeholderPassword}
              className="input-sign-up form-control"
              id="validationCustom03"
              required
              onChange={handelChangePassword}
            />
            <div className="valid-feedback">Right</div>
          </div>

          <button
            className={`btn btn-danger submit-sign-up-btn`}
          >
              {item.placeholderName ?
                <NavLink to="/login">{item.submitBtnText}</NavLink>
              :
                <NavLink to="/">{item.submitBtnText}</NavLink>
              }
              
          </button>

          <p className={`text-danger ${data.length > 5 ? "d-block" : "d-none"}`}>
            Forget Password?
          </p>
        </div>
      ))}
    </div>
  );
}

export default Signupcomponents;
