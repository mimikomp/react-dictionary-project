import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Style/Results.css";

export default function Results(props) {
  if (props.results) {
    console.log(props.results.meanings[0].synonyms);
    return (
      <div className="Results">
        <section className="row align-items-center justify-content-start">
          <h2 className="col wordCol">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            if (phonetic.text && phonetic.audio) {
              return (
                <div key={index} className="col phoneticCol">
                  <Phonetics phonetic={phonetic} />
                </div>
              );
            } else {
              return null;
            }
          })}
          <div className="mainDefinition">
            {props.results.meanings[0].definitions[0].definition}{" "}
          </div>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index} className="MeaningSection">
              {" "}
              <Meaning meaning={meaning} />{" "}
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
