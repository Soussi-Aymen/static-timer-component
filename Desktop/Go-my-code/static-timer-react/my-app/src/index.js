import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Time from "./Time";
import registerServiceWorker from "./registerServiceWorker";
ReactDOM.render(<Time />, document.getElementById("root"));
registerServiceWorker();
