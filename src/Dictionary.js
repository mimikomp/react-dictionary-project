import React, { useState } from "react";
import axios from "axios";
import "./Style/Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  const [searchResult, setSearchResult] = useState("");
  const [apiResults, setApiResults] = useState(null);

  function handleApiResponse(response) {
    setApiResults(response.data[0]);
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    event.target.reset();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`;
    axios.get(apiUrl).then(handleApiResponse);
    // https://dictionaryapi.dev/
  }

  function handleSearchResultChange(event) {
    setSearchResult(event.target.value);
  }

  if (apiResults) {
    return (
      <div className="Dictionary dictionaryResults">
        <h1>DICTIONARY</h1>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearchResultChange}
            autoFocus="off"
            placeholder="Search for a word"
          />
          <button type="submit" className="searchButton">
            <img src="/img/search-icon.png" alt="search-icon" />
          </button>
        </form>
        <Results results={apiResults} />
      </div>
    );
  } else {
    return (
      <div className="Dictionary dictionaryMain">
        <h1>DICTIONARY</h1>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearchResultChange}
            autoFocus="off"
            placeholder="Search for a word"
          />
          <button type="submit" className="searchButton">
            <img src="/img/search-icon.png" alt="search-icon" />
          </button>
        </form>
      </div>
    );
  }
}
