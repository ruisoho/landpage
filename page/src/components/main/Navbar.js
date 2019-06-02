import React from "react";
import "../misc/Navbar.css";
import { NavLink } from "react-router-dom";

/* Navigation controller acting as a
mount point */
const Navbar = () => {
  return (
    <div className="header">
      <a href="" class="logo">
        Undercode.
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon" />
      </label>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/resource">Resources</NavLink>
        </li>
        <li>
          <NavLink to="/updates">Updates</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign up</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
