import React from "react";
import {
  BlogPostSection,
  PlayerSection,
  PopupVideo,
  StatsSection,
  WelcomSection,
  WhatPeopleSay,
  Footer,
} from "./components";
import { DarkModeToogle } from "../../components/DarkModeToogle";
export const Home = () => {
  const [isOpenPopupVideo, setIsOpenPopupVideo] = React.useState(false);
  return (
    <div className="home position-relative">
      <DarkModeToogle />
      <WelcomSection />
      <StatsSection />
      <PlayerSection onOpenPopup={setIsOpenPopupVideo} />
      <BlogPostSection />
      <WhatPeopleSay />
      {isOpenPopupVideo && (
        <PopupVideo
          isOpenPopupVideo={isOpenPopupVideo}
          setVisibility={setIsOpenPopupVideo}
        />
      )}
      <Footer />
    </div>
  );
};
