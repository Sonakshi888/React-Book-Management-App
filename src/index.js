import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";

// ReactDOM.render(<h1>Hello</h1>, document.getElementById('root'));
// ReactDOM.render(<Card />, document.getElementById("root"));
ReactDOM.render(<AppRouter />, document.getElementById("root"));
