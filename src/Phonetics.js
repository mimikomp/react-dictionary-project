import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Style/Phonetics.css";

export default function Phonetics(props) {
  let audio = props.phonetic.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  if (props.phonetic.text && props.phonetic.audio) {
    return (
      <div className="Phonetics">
        <span className="phoneticsText">
          {props.phonetic.text} {""}
        </span>
        <span className="phoneticsAudio">
          <FontAwesomeIcon
            icon={faVolumeHigh}
            onClick={playAudio}
            className="phoneticsIcon"
          />
        </span>
      </div>
    );
  } else {
    return null;
  }
}
