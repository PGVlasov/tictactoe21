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
    fetch("/logout");
    //   .then((res) => res.json())
    //   .then(console.log("got something"));

    this.setState({
      isAuthentificated: false,
    });
  };
  render() {
    console.log("logout done");
    return <Redirect to={"/auth"} onClick={this.onExit} />;
  }
}

export default Logout;