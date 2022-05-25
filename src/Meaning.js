import React from "react";
import Synonyms from "./Synonyms";
import { Accordion } from "react-bootstrap";
import "./Style/Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header> {props.meaning.partOfSpeech}</Accordion.Header>
          <Accordion.Body>
            {props.meaning.definitions.map(function (definition, index) {
              return (
                <div key={index} className="wordInfo">
                  <div className="definition">
                    <strong> Definition: {""} </strong>
                    {definition.definition}
                  </div>
                  {definition.example ? (
                    <div className="example">Example: {definition.example}</div>
                  ) : null}

                  {definition.synonyms > [0] ? (
                    <div className="synonyms">
                      <Synonyms synonyms={definition.synonyms} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
