import React from "react";
import "./BlogPostSection.scss";
import { BLOGPOSTS } from "./BlogPostHard";
export const BlogPostSection = () => {
  return (
    <div className="blog-post py-5">
      <div className="container py-md-5 py-2">
        <div className="titles text-center">
          <h6>Latest Posts</h6>
          <h3>Blog Posts</h3>
        </div>

        <div className="row flex-wrap">
          {BLOGPOSTS.map((item, key) => {
            return (
              <div className="col-lg-4 col-md-6 item mt-5" key={key}>
                <div className="card">
                  <div className="card-header position-relative p-0">
                    <img className="w-100" src={item?.img} alt="" />
                    <div className="label">{item.label}</div>
                  </div>
                  <div className="card-body">
                    <div className="desc">{item.title}</div>
                    <div className="read-more d-flex justify-content-between">
                      <div class="d-flex align-items-center">
                        <a href="https://wp.w3layouts.com/diner/author/w3layouts/">
                          <img
                            src="https://secure.gravatar.com/avatar/328cc1f23e4a3b73aa60ee6ced1897a1?s=40&amp;d=mm&amp;r=g"
                            alt="W3Layouts"
                            class="rounded-circle"
                          />
                        </a>
                        <a href="https://wp.w3layouts.com/diner/author/w3layouts/">
                          W3Layouts
                        </a>
                      </div>
                      <a href="https://wp.w3layouts.com/diner/2021/03/01/hello-world/">
                        Read More{" "}
                        <span
                          class="fa fa-chevron-right ml-2"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
