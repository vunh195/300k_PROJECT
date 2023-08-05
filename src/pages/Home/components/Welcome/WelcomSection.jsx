import React from "react";
import "./WelcomSection.scss";
export const WelcomSection = () => {
  return (
    <div className="welcome py-5">
      <div class="content text-center py-lg-5">
        <h3 class="title px-lg-5">Deliciousness jumping into the mouth.</h3>
        <div class="buttons pb-lg-5">
          <a
            href="#url"
            class="btn btn-outline-light mt-sm-5 mt-4 me-2 me-lg-4"
          >
            Read More{" "}
            <span class="fa fa-chevron-right" aria-hidden="true"></span>
          </a>
          <a href="#url" class="btn btn-style btn-primary mt-sm-5 mt-4 explore">
            Contact Us{" "}
            <span class="fa fa-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </div>
    </div>
  );
};
