import React, { useState } from "react";
import "./Style/Dictionary.css";

export default function Dictionary() {
  const [searchResult, setSearchResult] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${searchResult}`);
  }

  function handleSearchResultChange(event) {
    setSearchResult(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>DICTIONARY</h1>
      <form onSubmit={search}>
        <input type="search" onChange={handleSearchResultChange} />
      </form>
    </div>
  );
}
