import React from "react";
import "./Style/Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6 col-lg-4 photosCol" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    className="img-fluid"
                    alt="Pictures of Dictionary Word"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
