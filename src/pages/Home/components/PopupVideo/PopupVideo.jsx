import React from "react";
import "./PopupVideo.scss";
export const PopupVideo = (props) => {
  const [isClose, setIsClose] = React.useState(!props.isOpenPopupVideo);
  React.useEffect(() => {
    if (isClose) {
      const timer = setTimeout(() => props.setVisibility(false), 300);
      return () => {
        clearTimeout(timer);
      };
    } else {
    }
  }, [props, isClose]);
  return (
    <div id="popup-play-video" className={isClose ? "close" : ""}>
      <div
        className="bg w-100 h-100"
        onClick={() => props.setVisibility(false)}
      ></div>
      <div className="iframe-wrapper position-relative">
        <button
          type="button"
          class="btn-close btn-close-white position-absolute"
          aria-label="Close"
          onClick={() => {
            setIsClose(true);
          }}
        ></button>

        <iframe
          title="vimeo-player"
          src="https://player.vimeo.com/video/305185528?h=195bf3cba0"
          width="640"
          height="360"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};
