import { Component, React } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  //   componentDidMount() {
  //
  //   }
  render() {
    return <Redirect to={"/auth"} onClick={this.state.onClick} />;
  }
}

export default Logout;
