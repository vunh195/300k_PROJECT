import React from "react";
import "./Footer.scss";
export const Footer = () => {
  return (
    <div className="footer py-md-5 py-3">
      <div className="container p-lg-4">
        <div className="row">
          <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-1 pr-lg-5">
            <div class=" mb-3">
              <h2>
                <a class="navbar-brand" href="https://wp.w3layouts.com/diner/">
                  Diner
                </a>
              </h2>
            </div>
            <p>
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at tempufddfel. Lorem ipsum dolor sit
              amet Semper at elit.
            </p>

            <div class=" mt-4 social-logo">
              <a href="https://www.facebook.com/w3layouts/" class="facebook">
                <span class="fa fa-facebook"></span>
              </a>

              <a href="https://twitter.com/W3layouts" class="twitter">
                <span class="fa fa-twitter"></span>
              </a>
              <a href="https://www.instagram.com/w3layouts_/" class="instagram">
                <span class="fa fa-instagram"></span>
              </a>

              <a
                href="https://in.linkedin.com/company/w3layouts"
                class="linkedin"
              >
                <span class="fa fa-linkedin"></span>
              </a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-2 mt-sm-0 mt-5">
            <div>
              <h6 class="mb-4">Categories</h6>
              <ul>
                <li>
                  <a href="https://wp.w3layouts.com/diner/category/drinks/">
                    Drinks
                  </a>
                </li>
                <li>
                  <a href="https://wp.w3layouts.com/diner/category/food/">
                    Food
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-sm-5 col-6 footer-list-29 footer-3 mt-lg-0 mt-5">
            <div>
              <h6 class="mb-4">Archives</h6>
              <ul>
                <li>
                  <a href="https://wp.w3layouts.com/diner/2021/03/">
                    March 2021
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-sm-7 footer-list-29 footer-4 mt-lg-0 mt-5 FooterSubscribe">
            <h6 class="mb-4">Subscribe to our Newsletter </h6>
            <p>
              Enter your email and receive the latest news, updates and special
              offers from us.
            </p>

            <form class="subscribe mt-4">
              <input
                type="email"
                name="Email"
                placeholder="Your Email Address"
                required=""
              />
              <button class="btn btn-style btn-primary w-100 mt-3">
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
