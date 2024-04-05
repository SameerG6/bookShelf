import React, { useContext } from "react";
import "../App.css"
import { AuthContext } from "../contacts/AuthProvider";
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"
    const handleLogout = () => {
        logOut().then(() => {
            alert('Logout Successful')
            navigate(from, {replace: true})
        }).catch((error) => {

        });
    }
  return (
    <div className="conta">
      <div className="cent">
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
