import axios from "axios";
import { useState } from "react";

import { AUTH_LOGAUT, AUTH_SUCCESS } from "./actionTypes";

export function auth(email, password, isAuthentificated) {
  return async (dispatch) => {
    let data = {
      email,
      password,
    };
    let authResult = await fetch("/auth/auth", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("fetchResult", authResult);

    if (authResult) {
      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      let token = `${(+new Date()).toString(10)}`;
      console.log(token);
      //localStorage.setItem("token", token);
      return dispatch(authSuccess(token));
    } else {
      alert("неверная пара логин-пароль");
    }
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
