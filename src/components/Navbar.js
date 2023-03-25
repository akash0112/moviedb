import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="navbar">
      <div className="navcontainer">
        <div className="logo">Movie</div>
        <div>
          {auth.user.loggedin ? (
            <div className="leftnavcontainer">
              <NavLink to="/list">
                <div className="button"> List</div>
              </NavLink>
              <NavLink to="/wishlist">
                <div className="button">Wish List</div>
              </NavLink>
            </div>
          ) : ''}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
