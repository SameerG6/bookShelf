import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Sidebar({ displayName }) {
  return (
    <div className="sidebar">
      <p>Welcome </p>
      
      <ul>
        <li>
          <Link to="/admin/dashboard">
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard/upload">
            Upload Book
          </Link>
        </li>
        <li>
          <Link to="/admin/dashboard/manage">
            Manage Books
          </Link>
        </li>
        <li>
          <Link to="/logout">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
