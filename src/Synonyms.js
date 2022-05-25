import React from "react";
import "./Style/Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row mt-1">
        {props.synonyms > [0] ? (
          <div className="synonymsTitle col">Synonyms: </div>
        ) : null}
        {props.synonyms.map(function (synonyms, index) {
          return (
            <div
              key={index}
              className="col list"
              style={{
                backgroundColor: ["#DD636E", "#ADC9FC", "#BFE19F"][index % 4],
              }}
            >
              {synonyms}
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
