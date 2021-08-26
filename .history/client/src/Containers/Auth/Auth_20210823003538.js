import { Component, React } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import is from "is_js";
import { connect } from "react-redux";
import { auth } from "../../store/action/auth";

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: "",
        type: "email",
        label: "Email",
        errorMessage: "Введите корректный email",
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: "",
        type: "password",
        label: "Пароль",
        errorMessage: "Длинна пароля не иожет быть менее 6 символов",
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
    isAuthentificated: false,
  };

  loginHeandler = (event) => {
    // this.setState({
    //   isAuthentificated: true,
    // });
    // event.preventDefault();
    // this.props.auth(
    //   this.state.formControls.email.value,
    //   this.state.formControls.password.value,
    //   true
    // );
    const { email, password } = this.state.formControls;
    let data = {
      email: email.value,
      password: password.value,
    };

    fetch("/auth/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentificated: response });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  registerHeandler = () => {
    document.location.href = "/register";
  };

  resetHeandler = () => {
    document.location.href = "/reset";
  };

  submitHeadler = (event) => {
    event.preventDefault();
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }
    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (validation.email) {
      isValid = is.email(value) && isValid;
    }
    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid,
    });
  };

  render() {
    console.log(this.props);

    // if (this.state.isAuthentificated) {
    //     document.location.href = "/";
    //   }

    if (this.props.isAuthentificated) {
      document.location.href = "/";
    } else {
    }
    //console.log(this.state.isAuthentificated);
    return (
      <div className={classes.Auth}>
        <h1>Авторизация</h1>
        <form onSubmit={this.submitHeadler} className={classes.AuthForm}>
          {this.renderInputs()}
          <Button
            type="success"
            onClick={this.loginHeandler}
            disabled={!this.state.isFormValid}
          >
            Войти
          </Button>
          <Button type="primary" onClick={this.registerHeandler}>
            Зарегестрироваться
          </Button>
          <Button type="error" onClick={this.resetHeandler}>
            Забыли пароль?
          </Button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    isAuthentificated: state.isAuthentificated,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password) => dispatch(auth(email, password)),
  };
}

export default connect(mapStateToProps)(Auth);
// mapStateToProps, mapDispatchToProps
