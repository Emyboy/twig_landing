import React from "react";

type Props = {};

export default function OurFeatures({}: Props) {
  return (
    <section className="main-features">
      <div className="container">
        <h3
          className="section-title text-center text-capitalize mb-4  fadeIn "
          data-animation-options="{
                            'name': 'fadeIn', 'delay': '.2s'
                        }"
        >
          Build Your Amazing Marketplace With Wolmart
        </h3>
        <p
          className="section-desc text-center pb-6  fadeIn "
          data-animation-options="{
                            'name': 'fadeIn', 'delay': '.4s'
                        }"
        >
          A powerful tools designed to build marketplace easily for beginners
          &amp; advanced developers.
        </p>
        <div className="row justify-content-center gutter-lg pb-5">
          <div className="col-sm-6 col-lg-3 mb-5">
            <div
              className="flip-card flip-card-3d   "
              data-animation-options="{
                                        'name': '', 'delay': '.65s'
                                    }"
            >
              <div className="icon-box icon-box-title pt-6 icon-box-lg flip-front">
                <span className="icon-box-icon mb-4"></span>
                <h4 className="icon-box-title ls-l font-weight-bolder text-none mb-0 mt-1">
                  Powerful
                  <br />
                  Marketplace Toolkit
                </h4>
              </div>
              <div className="icon-box flip-back bg-gradient">
                <div className="flip-content">
                  <p className="text-white">
                    Easily build marketplace template with this toolkits.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-5">
            <div
              className="flip-card flip-card-3d   "
              data-animation-options="{
                                        'name': '', 'delay': '.5s'
                                    }"
            >
              <div className="icon-box icon-box-lg mf-box2 flip-front">
                <span className="icon-box-icon"></span>
                <h4 className="icon-box-title ls-l text-none mb-0">
                  Stunning
                  <br />
                  Design
                </h4>
              </div>
              <div className="icon-box flip-back bg-gradient">
                <div className="flip-content">
                  <p className="text-white">
                    Details matter, Quality, not quantity, Trends is what guides
                    us.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-5">
            <div
              className="flip-card flip-card-3d   "
              data-animation-options="{
                                        'name': '', 'delay': '.35s'
                                    }"
            >
              <div className="icon-box icon-box-lg flip-front">
                <span className="icon-box-icon mb-4"></span>
                <h4 className="icon-box-title ls-l text-none mb-3">
                  High-Speed Performance
                </h4>
              </div>
              <div className="icon-box flip-back bg-gradient">
                <div className="flip-content">
                  <p className="text-white">
                    High quality code and optimization helps template on
                    high-speed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-5">
            <div
              className="flip-card flip-card-3d   "
              data-animation-options="{
                                        'name': '', 'delay': '.2s'
                                    }"
            >
              <div className="icon-box icon-box-lg flip-front">
                <span className="icon-box-icon mb-4"></span>
                <h4 className="icon-box-title ls-l text-none mb-3">
                  Fully &amp; Easy Customizable
                </h4>
              </div>
              <div className="icon-box flip-back bg-gradient">
                <div className="flip-content">
                  <p className="text-white">
                    Easily customize every part through perfect widgets &amp;
                    options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
