import { Component, React } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  //   componentDidMount() {
  //
  //   }
  state = {
    isAuthentificated: true,
    loading: false,
  };

  onExit = () => {
    fetch("/logout", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      //   .then((res) => res.json())
      .then(console.log("got something"));

    this.setState({
      isAuthentificated: false,
    });

    console.log("done");
  };
  render() {
    console.log("logout done");
    return <Redirect to={"/auth"} onClick={this.onExit} />;
  }
}

export default Logout;
