import { Component, React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from "./Containers/Field/Game";
import { Header } from "./Containers/Header/Header";
import { Navbar } from "./Containers/Navbar/Navbar";
import About from "./Containers/Field/About";
import Players from "./Containers/Field/Player";
import Auth from "./Containers/Auth/Auth";
import Register from "./Containers/Auth/Register";
import Training from "./Containers/Training/Training";
import { connect } from "react-redux";
import { autoLogin } from "./store/action/auth";

class App extends Component {
  state = {
    isAuthentificated: true,
    loading: true,
  };
  async componentDidMount(state) {
    fetch("/auth")
      .then((res) => res)
      .then(console.log("got something"))
      .then((res) => this.setState({ isAuthentificated: res.status }));

    this.setState({ loading: false });
  }
  render() {
    console.log(this.state.isAuthentificated);
    if (this.state.isAuthentificated) {
      return (
        <BrowserRouter>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Game} />
            <Route path="/about" component={About} />
            <Route path="/training" component={Training} />
            <Route path="/player" component={Players} />
            <Route path="/auth" component={Auth} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      );
    } else {
      return (
        <BrowserRouter>
          <Header />
          <Navbar />
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/register" component={Register} />
          </Switch>
        </BrowserRouter>
      );
    }
  }
}

export default App;
