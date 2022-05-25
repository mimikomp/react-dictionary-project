import React from "react";
import "./Style/App.css";

import "bootstrap/dist/css/bootstrap.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Dictionary />
      </div>
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
    </div>
  );
}

export default App;
