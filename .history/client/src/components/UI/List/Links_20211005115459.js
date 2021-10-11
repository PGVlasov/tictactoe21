import React from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

export default class Links extends Component() {
  state = {
    links: [],
  };

  async componentDidMount(state) {
    fetch("/createGame")
      .then((res) => res.json())
      .then(console.log("got something"));
    //.then((links) => this.setState({ links }));
  }
  render() {
    return (
      <div>
        {this.state.links.map((link) => (
          <div className={classes.li} key={link.id}>
            <a href={link.title} className={classes.a}>
              {"играть против:  " + link.creator}
            </a>

            <Button type="error">&times;</Button>
          </div>
        ))}
      </div>
    );
  }
}

// const Links = () => {
//   let links = [];
//   return (
//     <div>
//       {links.map((link) => (
//         <div className={classes.li} key={link.id}>
//           <a href={link.title} className={classes.a}>
//             {" "}
//             {"играть против:  " + link.creator}
//           </a>

//           <Button type="error">&times;</Button>
//         </div>
//       ))}
//     </div>
//   );
// };

//export default Links;
