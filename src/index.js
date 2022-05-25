import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <footer className="text-center">
      <a
        href="https://github.com/mimikomp/react-dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        Open-Sourced Code
      </a>{" "}
      by Cassidy Komp
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
