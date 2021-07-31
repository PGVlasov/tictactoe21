import { Component, React } from "react";
import classes from "./Auth.module.css";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import is from "is_js";
import { connect } from "react-redux";
import { auth } from "../../store/action/auth";

export default class Auth extends Component {
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
    //  isAuthentificated: false,
  };

  loginHeandler = (event) => {
    this.setState({
      isAuthentificated: true,
    });
    event.preventDefault();
    const { email, password } = this.state.formControls;
    let data = {
      email: email.value,
      password: password.value,
    };

    console.log(data);

    fetch("/auth/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(this.state);
    document.location.href = "/player";
  };

  registerHeandler = () => {
    document.location.href = "/register";
    //window.location.replace("http://stackoverflow.com");
  };

  recoverHeandler = () => {
    // document.location.href = "/recover";
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
    console.log(this.state.isAuthentificated);
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
          <Button type="primary" onClick={this.recoverHeandler}>
            Восстановить пароль
          </Button>
        </form>
      </div>
    );
  }
}

// class Auth extends Component {
//   state = {
//     isFormValid: false,
//     formControls: {
//       email: {
//         value: "",
//         type: "email",
//         label: "Email",
//         errorMassage: "Введите корректный email",
//         valid: false,
//         touched: false,
//         validation: {
//           required: true,
//           email: true,
//         },
//       },
//       password: {
//         value: "",
//         type: "password",
//         label: "Пароль",
//         errorMassage: "Введите корректный Пароль",
//         valid: false,
//         touched: false,
//         validation: {
//           required: true,
//           minLenght: 6,
//         },
//       },
//     },
//   };

//   loginHeandler = () => {
//     this.props.auth(
//       this.state.formControls.email.value,
//       this.state.formControls.password.value,
//       true
//     );
//   };

//   registerHeandler = () => {
//     this.props.auth(
//       this.state.formControls.email.value,
//       this.state.formControls.password.value,
//       false
//     );
//   };

//   submitHeadler = (event) => {
//     event.preventDefault();
//   };

//   validateControl(value, validation) {
//     if (!validation) {
//       return true;
//     }
//     let isValid = true;

//     if (validation.required) {
//       isValid = value.trim() !== "" && isValid;
//     }
//     if (validation.email) {
//       isValid = is.email(value) && isValid;
//     }
//     if (validation.minLenght) {
//       isValid = value.length >= validation.minLenght && isValid;
//     }

//     return isValid;
//   }

//   onChangeHandler = (event, controlName) => {
//     console.log(`${controlName}: `, event.target.value);

//     const formControls = { ...this.state.formControls };
//     const control = { ...formControls[controlName] };

//     control.value = event.target.value;
//     control.touched = true;
//     control.valid = this.validateControl(control.value, control.validation);

//     formControls[controlName] = control;

//     let isFormValid = true;

//     Object.keys(formControls).forEach((name) => {
//       isFormValid = formControls[name].valid && isFormValid;
//     });

//     this.setState({
//       formControls,
//       isFormValid,
//     });
//   };

//   renderInputs() {
//     return Object.keys(this.state.formControls).map((controlName, index) => {
//       const control = this.state.formControls[controlName];
//       return (
//         <Input
//           key={controlName + index}
//           type={control.type}
//           value={control.value}
//           valid={control.valid}
//           touched={control.touched}
//           label={control.label}
//           shouldValidate={!!control.validation}
//           errorMassage={control.errorMassage}
//           onChange={(event) => this.onChangeHandler(event, controlName)}
//         />
//       );
//     });
//   }

//   render() {
//     return (
//       <div className={classes.Auth}>
//         <div>
//           <h1>Авторизация</h1>
//           <form onSubmit={this.submitHeadler} className={classes.AuthForm}>
//             {this.renderInputs()}

//             <Button
//               type="success"
//               onClick={this.loginHeandler}
//               disabled={!this.state.isFormValid}
//             >
//               Войти
//             </Button>
//             <Button
//               type="primary"
//               onClick={this.registerHeandler}
//               disabled={!this.state.isFormValid}
//             >
//               Зарегестрироваться
//             </Button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     auth: (email, password, isLogin) =>
//       dispatch(auth(email, password, isLogin)),
//   };
// }

// export default connect(null, mapDispatchToProps)(Auth);
