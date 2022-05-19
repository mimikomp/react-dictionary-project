import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div>
        {props.synonyms > [0] ? "Synonyms:" : null}
        <ul className="Synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return (
              <li key={index} className="text-capitalize">
                {synonyms}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
