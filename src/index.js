import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes.js";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  //strict mode helps us fixing future deprecations
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
