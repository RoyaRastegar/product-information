import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import "./fonts/vazir/Vazir-FD-WOL.ttf";
import "./fonts/vazir/Vazir-Light-FD-WOL.ttf";
import "./fonts/vazir/Vazir-Bold-FD-WOL.ttf";
import store from "./store";
import { Provider } from "react-redux";
// store.dispatch({
//   type: "AddToCart",
//   payload: {
//     id: Math.random(),
//     title: "کرم ",
//     titleEng: "DETOX Ultra BIOMARINE",
//     brand: "هیدرودرم",
//     discountPercent: 10,
//     price: 25000,
//     discount: 50000,
//     amount: 0,
//   },
// });
// console.log(store.getState());
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
