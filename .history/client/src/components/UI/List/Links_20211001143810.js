import React from "react";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li>
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
