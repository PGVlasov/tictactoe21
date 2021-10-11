import React from "react";
import Button from "../Button/Button";

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}>
          {link.title}
          <Button class type="error">
            удалить
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Links;
