import { Component, React } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  //   componentDidMount() {
  //
  //   }
  render() {
    this.setState({
      isAuthentificated: false,
    });
    return <Redirect to={"/"} />;
  }
}

export default Logout;
