import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li className={classes.Link}>
          {" "}
          <a href="/" key={link.id}>
            {link.title}
            <Button class type="success">
              удалить
            </Button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
