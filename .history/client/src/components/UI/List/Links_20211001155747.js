import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul className={classes.ul}>
      {links.map((link) => (
        <li className={classes.li} key={link.id}>
          {link.title}
        </li>
      ))}
    </ul>
  );
};

export default Links;
