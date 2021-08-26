import axios from "axios";
import { AUTH_LOGAUT, AUTH_SUCCESS } from "./actionTypes";

export function auth(email, password, isAuthentificated) {
  return async (dispatch) => {
    // const authData = {
    //   email,
    //   password,
    //   isAuthentificated,
    // };

    // const response = await axios.post(url, authData);

    // const { email, password } = this.state.formControls;
    let authData = {
      email: email.value,
      password: password.value,
    };

    fetch("/auth/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(authData),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ isAuthentificated: response });
      })
      .catch((error) => {
        console.log(error);
      });
    //const data = response.data;

    // const expirationDate = new Date(
    //   new Date().getTime() + data.expiresIn * 1000
    // );

    // localStorage.setItem("token", data.idToken);
    // localStorage.setItem("userId", data.localId);
    localStorage.setItem("isAuthentificated", isAuthentificated);

    // dispatch(authSuccess(data.idToken));
    //dispatch(autoLogout(data.expiresIn));
  };
}

// export function autoLogout(time) {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(logout());
//     }, time * 1000);
//   };
// }

export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGAUT,
  };
}

// export function autoLogin() {
//   return (dispatch) => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       dispatch(logout());
//     } else {
//       const expirationDate = new Date(localStorage.getItem("expirationDate"));
//       if (expirationDate <= new Date()) {
//         dispatch(logout());
//       } else {
//         dispatch(authSuccess(token));
//         dispatch(
//           autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
//         );
//       }
//     }
//   };
// }

export function authSuccess(token) {
  return {
    type: AUTH_SUCCESS,
    token,
  };
}

export default auth;