import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classes from "./navbar.module.css";
import axios from "axios";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    console.log("NOVBAR", this.props);
    if (this.props.isAuthenticated) {
      return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
          <div className={classes.navbarHeader}>MENU</div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Info
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink exact to="/gameList" className="nav-link">
                Lobby
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to="/game" className="nav-link">
                Game
              </NavLink>
            </li>
            {/* <li className={classes.li}>
              <NavLink to="/training" className="nav-link">
                Training
              </NavLink>
            </li> */}
            <li className={classes.li}>
              <NavLink to="/player" className="nav-link">
                Player
              </NavLink>
            </li>
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
              <NavLink to="/" className="nav-link">
                Info
              </NavLink>
            </li>
            <li className={classes.li}>
              <NavLink to="/training" className="nav-link">
                Training
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

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.isAuthentificated,
  };
}

export default connect(mapStateToProps)(Navbar);
