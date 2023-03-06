import { CircleNotifications } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase_app";
import AuthService from "../services/auth_service";
import "./styles/nav.css";
function Nav() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const authService = new AuthService();
  const isAuthenticated: boolean =
    user !== null && user !== undefined && !loading;
  const [loggingOut, setLoggingOut] = useState<boolean>(false);
  const handleLogOut = async () => {
    setLoggingOut(true);
    const respone = await authService.logOut();
    setLoggingOut(false);
  };
  return (
    <div className="nav__header">
      {/* Logo */}
      <h1>Merkury</h1>
      {/* Nav */}
      <nav  className="nav__items">
        <ul > 
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/blog">Blog</Link>
          </li> */}
          <li>
            <Link to="/exchange">Exchange</Link>
          </li>
          <li>
            <a href="#footer">About</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
      <div>
        {isAuthenticated ? (
          loggingOut ? (
            <CircleNotifications />
          ) : (
            <div className="nav__authenticated_section" onClick={handleLogOut}>
              <Avatar />
              <p>{user?.displayName}</p>
            </div>
          )
        ) : (
          <div>
            <button
              className="nav__rounded_button"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
            <button
              className="nav__rounded_button"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
