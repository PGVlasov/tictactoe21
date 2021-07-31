import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";

export default class Navbar extends Component {
  state = {
    isAuthentificated: true,
    loading: false,
  };

  render() {
    if (this.state.isAuthentificated) {
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
            {/* <li className={classes.li}>
              <NavLink to="/auth" className="nav-link">
                Login
              </NavLink>
            </li> */}
            <li className={classes.li}>
              <NavLink to="/logout" className="nav-link">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav className={classes.navbar}>
          <div className={classes.navbarHeader}>MENU</div>
          <ul className={classes.ul}>
            <li className={classes.li}>
              <NavLink to="/about" className="nav-link">
                Info
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
}