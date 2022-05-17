import React, { useState } from "react";
import axios from "axios";
import "./Style/Dictionary.css";

export default function Dictionary() {
  const [searchResult, setSearchResult] = useState("");

  function handleApiResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`;
    axios.get(apiUrl).then(handleApiResponse);
    // https://dictionaryapi.dev/
  }

  function handleSearchResultChange(event) {
    setSearchResult(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>DICTIONARY</h1>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleSearchResultChange}
          autoFocus="off"
        />
      </form>
    </div>
  );
}
