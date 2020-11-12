import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./app";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

render(<App />, document.getElementById("root"));

serviceWorkerRegistration.register();
