import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="text-capitalize">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <span>
              <strong> Definition: {""} </strong>
              {definition.definition}
              <br />
              <em>
                {definition.example ? "Example: " : null}
                {definition.example}
              </em>
              <Synonyms synonyms={definition.synonyms} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
