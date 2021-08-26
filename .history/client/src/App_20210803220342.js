import { Component, React } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Game from "./Containers/Field/Game";
import { Header } from "./Containers/Header/Header";
import Navbar from "./Containers/Navbar/Navbar";
import About from "./Containers/Field/About";
import Players from "./Containers/Field/Player";
import Auth from "./Containers/Auth/Auth";
import Register from "./Containers/Auth/Register";
import Reset from "./Containers/Auth/Reset";
import Training from "./Containers/Training/Training";
import Logout from "./Containers/Auth/Logout";
import NewPassord from "./Containers/Auth/NewPassword";
import { connect } from "react-redux";
import { autoLogin } from "./store/action/auth";

console.log(window.location.token);

class App extends Component {
  render() {
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
          <Route path="/reset" component={Reset} />
          <Route path="/newPassword/:token" component={NewPassord} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
