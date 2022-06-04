import React from "react";
import "./Style/App.css";

import "bootstrap/dist/css/bootstrap.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="dictionary-container">
        <Dictionary />
      </div>
    </div>
  );
}

export default App;
