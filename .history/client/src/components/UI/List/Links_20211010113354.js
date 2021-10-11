import React, { Component } from "react";
import classes from "./Links.module.css";
import Button from "../Button/Button";

export default class Links extends Component {
  state = {
    links: [],
  };

  refreshGameList = (state) => {
    fetch("/createGame")
      .then((res) => res.json())
      .then(console.log("got something"))
      .then((links) => this.setState({ links }))
      .then((links) => console.log({ links }));
  };

  deleteGame = () => {
    // console.log("URLLLLLLLLLL", this.link.url);
    this.refreshGameList();
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.refreshGameList}>
          Обновить список игр
        </Button>
        <hr />
        {this.state.links.map((link) => (
          <div className={classes.li} key={link._id}>
            <a href={link.url} className={classes.a}>
              {"играть против:  " + link.creator}
            </a>

            <Button type="error" onClick={this.deleteGame}>
              &times;
            </Button>
          </div>
        ))}
      </div>
    );
  }
}

// import React, { Component } from "react";
// import classes from "./Links.module.css";
// import Button from "../Button/Button";

// class Links extends Component() {
//   render() {
//     return (
//       <div>
//         <p>something</p>
//         <Button></Button>
//       </div>
//     );
//   }
// }
// export default Links;
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
