import axios from "axios";
import { AUTH_LOGAUT, AUTH_SUCCESS } from "./actionTypes";

export function auth(email, password, isLogin) {
  return async (dispatch) => {
    let data = {
      email,
      password,
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
        console.log("JSON.parse(response)", JSON.parse(response));
      });

    // .then((response) => {
    //   //  return response.json();
    //   console.log("JSON.parse(response)", response.data);
    // });
    //   .catch((error) => {
    //     console.log(error);
    //   });
    //   .then((response) => response.json())
    //   .then((response) => {
    //     this.setState({ isAuthentificated: response });
    //     console.log("JSON.parse(response)", JSON.parse(response));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // {type: AUTH_SUCCESS,
    // isAuthentificated: true,}
    //  отсюда авторизация передается в пропсы
    //localStorage.setItem("isAuthentificated", isAuthentificated);
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

// export default auth;

// const authData = {
//   email,
//   password,
//   isAuthentificated,
// };

// const response = await axios.post(url, authData);

// // const { email, password } = this.state.formControls;
// let authData = {
//   email,
//   password,
//   isAuthentificated,
// };
// console.log(authData);

// fetch("/auth/auth", {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify(authData),
// })
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//     this.setState({ isAuthentificated: response });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//const data = response.data;

// const expirationDate = new Date(
//   new Date().getTime() + data.expiresIn * 1000
// );

// localStorage.setItem("token", data.idToken);
// localStorage.setItem("userId", data.localId);
