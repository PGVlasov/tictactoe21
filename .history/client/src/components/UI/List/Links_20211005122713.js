import React, { useState } from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

// const Links = () => {
//   const [links, setLinks] = useState();

//   async function componentDidMount(state) {
//     fetch("/createGame")
//       .then((res) => res.json())
//       .then(console.log("got something"))
//       .then((links) => setLinks({ links }));

//     // .then((links) => this.setState({ links }));
//   }

//   console.log(links);
//   return <div></div>;
// };

// export default Links;

//   {/* {links.map((link) => ( */}
//     <div className={classes.li} key={link.id}>
//       <a href={link.title} className={classes.a}>
//         {" "}
//         {"играть против:  " + link.creator}
//       </a>

//       <Button type="error">&times;</Button>
//     </div>
//   {/* ))} */}
