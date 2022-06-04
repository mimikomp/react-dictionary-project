import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";
import { Accordion } from "react-bootstrap";

import "./Style/Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section className="WordSection">
          <h2 className="wordCol">{props.results.word}</h2>
          <div className="row justify-content-start ms-1">
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
          </div>
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
        <section className="PhotosSection">
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>photos</Accordion.Header>
              <Accordion.Body>
                <Photos photos={props.photos} />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </div>
    );
  } else {
    return null;
  }
}
