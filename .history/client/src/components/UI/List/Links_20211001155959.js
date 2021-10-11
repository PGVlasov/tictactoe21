import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul className={classes.ul}>
      {links.map((link) => (
        <li className={classes.li} key={link.id}>
          <a href="/">{link.title}</a>
          <Button type="error">&times;</Button>
        </li>
      ))}
    </ul>
  );
};

export default Links;
