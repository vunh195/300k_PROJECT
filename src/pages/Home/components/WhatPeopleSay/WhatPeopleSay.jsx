import React from "react";
import "./WhatPeopleSay.scss";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { QUOTES } from "./WhatPeopleSay.hard";
export const WhatPeopleSay = () => {
  return (
    <div className="what-people-say py-5">
      <div className="container py-lg-5 py-md-3">
        <div className="titles text-center">
          <h6>Latest Posts</h6>
          <h3 className="mb-5">Blog Posts</h3>
        </div>
        <OwlCarousel className="owl-theme" dots loop center items={1}>
          {QUOTES.map((q, key) => {
            return (
              <div class="item" key={key}>
                <div className="content text-center">
                  <img
                    src="https://wp.w3layouts.com/diner/wp-content/themes/Diner/assets/images/team1.jpg"
                    class="img-responsive"
                    alt="placeholder"
                  />
                  <span class="fa fa-quote-left icon"></span>
                  <blockquote>
                    <q>OMG! I cannot believe. It's Awesome</q>
                  </blockquote>
                  <p>
                    My new site is so much faster and easier to work with than
                    my old site. They are here to help the customers to get
                    their success. Nemo sit eos, quod minus eius illo labore.
                    Pellen tesque libero ut justo, ultrices in ligula.
                  </p>
                  <div class="text-center mt-4">
                    <div class="align-self">
                      <h3>Johnson william</h3>
                      <p class=" text-center">Customer</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </div>
  );
};
