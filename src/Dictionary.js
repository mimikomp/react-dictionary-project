import React, { useState } from "react";
import axios from "axios";
import "./Style/Dictionary.css";
import Results from "./Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <div className="Dictionary">
      <div className="DictionaryIcon">
        <img
          src="/img/dictionary-icon.png"
          className="dictionaryImage"
          alt="dictionary-logo"
        ></img>
      </div>
      <h1>DICTIONARY</h1>
      <h3>What word do you want to look up?</h3>
      <section>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleSearchResultChange}
            autoFocus="off"
            placeholder="Search for a word"
          />
          <button type="submit" className="searchButton">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
          </button>
        </form>
      </section>
      {apiResults ? <Results results={apiResults} /> : null}
    </div>
  );
}
