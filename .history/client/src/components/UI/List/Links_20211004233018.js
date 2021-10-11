import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    // <ul className={classes.ul}>
    <div>
      {links.map((link) => (
        <div className={classes.li} key={link.id}>
          {/* <a className={classes.a} href="/"> */}
          <a href={link.title} className={classes.a}>
            {" "}
            {"играть против: " + link.creator}
          </a>

          {/* </a> */}
          <Button type="error">&times;</Button>
          {/* <a href="/">ssss</a> */}
        </div>
      ))}
      {/* // </ul> */}
    </div>
  );
};

export default Links;
