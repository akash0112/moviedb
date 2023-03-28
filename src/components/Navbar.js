import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { logout } from "../store/actions.js/actions";
import "./navbar.css";
const Navbar = () => {
  const dispatch = useDispatch()
  const handleLogOut=()=>{
    dispatch(logout(false))
  }
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
              <NavLink onClick={()=>handleLogOut()}>
                <div className="button">Logout</div>
              </NavLink>
            </div>
          ) : ''}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
