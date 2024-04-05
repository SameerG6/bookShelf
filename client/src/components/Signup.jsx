import React, { useContext, useState } from "react";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const [error,setError] = useState("error");

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Sign up successful")
            navigate(from, {replace: true})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)
        });
    }
  return (
    <div className="container">
      <div className="form_area">
        <p className="title">SIGN UP</p>
        <form action="" onSubmit={handleSignUp}>
          <div className="form_group">
            <label className="sub_title" htmlFor="email">
              Email
            </label>
            <input
              placeholder="Enter your email"
              id="email"
              className="form_style"
              type="email"
            />
          </div>
          <div className="form_group">
            <label className="sub_title" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Enter your password"
              id="password"
              className="form_style"
              type="password"
            />
          </div>
          <div>
            <button className="btn">SIGN UP</button>
            <p>
              Have an Account? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
