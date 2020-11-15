import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import "./index.css";
import App from "./app";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
