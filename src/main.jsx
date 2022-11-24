import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Router from "./Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="App">
    <div className="grid"></div>
    <div className="vignetting"></div>
    <Router />
  </div>
);
