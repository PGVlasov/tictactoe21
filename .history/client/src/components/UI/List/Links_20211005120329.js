import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

const Links = () => {
  let links = [];

  async function componentDidMount(state) {
    fetch("/users")
      .then((res) => res.json())
      .then(console.log("got something"));

    // .then((links) => this.setState({ links }));
  }

  componentDidMount();
  return (
    <div>
      {links.map((link) => (
        <div className={classes.li} key={link.id}>
          <a href={link.title} className={classes.a}>
            {" "}
            {"играть против:  " + link.creator}
          </a>

          <Button type="error">&times;</Button>
        </div>
      ))}
    </div>
  );
};

export default Links;
