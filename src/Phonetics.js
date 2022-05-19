import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  console.log(props.phonetic.audio);
  let audio = props.phonetic.audio;

  function playAudio() {
    const audioSound = new Audio(audio);
    audioSound.play();
  }

  return (
    <div className="Phonetics">
      <span className="phoneticsText">
        {props.phonetic.text} {""}
      </span>
      {props.phonetic.audio ? (
        <FontAwesomeIcon
          icon={faVolumeHigh}
          onClick={playAudio}
          className="phonecticsIcon"
        />
      ) : null}
    </div>
  );
}
