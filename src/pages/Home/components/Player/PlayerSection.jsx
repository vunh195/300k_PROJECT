import React from "react";
import "./PlayerSection.scss";
export const PlayerSection = (props) => {
  return (
    <div className="player py-5">
      <div className="container position-relative d-flex flex-row align-items-center justify-content-center px-lg-5">
        <div className="play-icon" onClick={() => props.onOpenPopup(true)}>
          <span class="fa fa-play"></span>
        </div>
      </div>
    </div>
  );
};
