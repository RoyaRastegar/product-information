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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
