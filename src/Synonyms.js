import React from "react";
import "./Style/Synonyms.css";

export default function Synonyms2(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms row mt-1 text-center">
        <div className="col">
          {props.synonyms > [0] ? (
            <div className="synonymsTitle">synonyms</div>
          ) : null}
          <ul>
            {props.synonyms.map(function (synonyms, index) {
              return (
                <li
                  key={index}
                  className="list"
                  style={{
                    backgroundColor: [
                      "#DD636E",
                      "#ADC9FC",
                      "#BFE19F",
                      "#f5dd81",
                    ][index % 4],
                  }}
                >
                  {synonyms}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
