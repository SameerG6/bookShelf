import React, { useContext, useState } from "react";
import "../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contacts/AuthProvider";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState("error");

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Login successful");
        navigate(from, {replace:true})
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

    const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  };
  return (
    <div className="container">
      <div className="form_area">
        <p className="title">LOG IN</p>
        <form action="" onSubmit={handleLogin}>
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
            <button className="btn">LOG IN</button>

            <p>
              Don't have an Account? <Link to="/sign-up">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
