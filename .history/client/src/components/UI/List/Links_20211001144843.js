import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li className={getClassSet.Link}>
          {" "}
          <a href="/" key={link.id}>
            {link.title}
            <Button class type="error">
              удалить
            </Button>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
