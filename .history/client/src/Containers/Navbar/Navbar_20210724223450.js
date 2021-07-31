import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

// console.log(this.state.isAuthentificated);
// if (this.state.isAuthentificated) {
class Navbar extends Component {
  render() {
    return (
      <nav className={classes.navbar}>
        <div className={classes.navbarHeader}>MENU</div>
        <ul className={classes.ul}>
          <li className={classes.li}>
            <NavLink exact to="/" className="nav-link">
              Main
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to="/about" className="nav-link">
              Info
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to="/training" className="nav-link">
              Training
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to="/player" className="nav-link">
              Player
            </NavLink>
          </li>
          <li className={classes.li}>
            <NavLink to="/auth" className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
