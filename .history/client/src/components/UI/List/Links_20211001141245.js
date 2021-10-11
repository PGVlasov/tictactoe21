import React from "react";

const Links = ({ links }) => {
  return (
    <ul>
      {links.map((link) => (
        <li key={link.id}></li>
      ))}
    </ul>
  );
};

export default Links;
