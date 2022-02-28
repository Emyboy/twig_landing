import React from "react";

import Img from 'next/image';

import img1 from "../../landing_asset/images/reasons/step1-386x150.png";
import img2 from "../../landing_asset/images/reasons/step2-386x150.png";
import img3 from "../../landing_asset/images/reasons/step3-386x150.png";
import img4 from "../../landing_asset/images/reasons/step4-386x150.png";
import img5 from "../../landing_asset/images/reasons/step5-386x150.png";

type Props = {};

export default function HowItWorks({}: Props) {
  return (
    <section
      className="main-reason-section float-bg"
      style={{
        backgroundImage: `url(&quot;assets/landing/images/reasons/reason-bg.jpg&quot;)`,
        backgroundColor: "rgb(48, 100, 233)",
        backgroundPosition: "-143px -35px",
        backgroundSize: "110%",
      }}
    >
      <div className="container">
        <div className="row mb-6">
          <div className="animated-ellipses col-xl-5">
            <div className="ellipse"></div>
            <div className="ellipse"></div>
            <div className="ellipse"></div>
            <div className="ellipse"></div>
            <div
              className="count-wrapper appear-animate blurIn appear-animation-visible"
              data-animation-options="{
                                    'name': 'blurIn', 'delay': '.4s'
                                }"
            >
              <label className="text-gradient">5</label>
            </div>
            <div className="text-reasons">
              <h3
                className="text-white text-uppercase font-weight-bolder mb-2 appear-animate fadeInLeftShorter appear-animation-visible"
                data-animation-options="{
                                        'name': 'fadeInLeftShorter', 'delay': '.4s'
                                    }"
              >
                Reasons
              </h3>
              <h3
                className="text-white text-uppercase font-weight-bolder mb-2 appear-animate fadeInLeftShorter appear-animation-visible"
                data-animation-options="{
                                        'name': 'fadeInLeftShorter', 'delay': '.8s'
                                    }"
              >
                Why you should choose
              </h3>
              <h3
                className="text-white text-uppercase font-weight-bolder mb-0 appear-animate fadeInLeftShorter appear-animation-visible"
                data-animation-options="{
                                        'name': 'fadeInLeftShorter', 'delay': '1.2s'
                                    }"
              >
                Wolmart
              </h3>
            </div>
          </div>
          <div
            className="col-xl-6 pl-9 pr-10 pt-4 appear-animate fadeIn appear-animation-visible"
            data-animation-options="{
                                'name': 'fadeIn', 'delay': '.5s'
                            }"
          >
            <h3 className="text-white text-capitalize font-weight-bolder ls-10 lh-1 mt-2">
              With Wolmart Your Satisfaction Is Guaranteed.
            </h3>
            <p className="text-white ">
              You will be able to find 5 most important things for your
              marketplace below.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-11 col-lg-12 mx-md-auto">
            <div className="timeline">
              <div className="timeline-body">
                <article className="timeline-box left">
                  <div className="timeline-content">
                    <h2
                      className="font-weight-bolder text-dark appear-animate zoomIn appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'zoomIn', 'delay': '.2s'
                                                }"
                    >
                      01.
                    </h2>
                    <h4
                      className="timeline-title text-white appear-animate fadeInRightShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'delay': '.3s'
                                                }"
                    >
                      An Optimized Performance With High Speed And Code Quality
                    </h4>
                    <div
                      className="appear-animate fadeInRightShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'delay': '.4s'
                                                }"
                    >
                      <p className="mb-0 text-white">
                        Wolmarts high rendering speed with clean and optimized
                        structure is the main key to lead your ecommerce top of
                        the world.
                      </p>
                    </div>
                  </div>
                  <span
                    className="timeline-node appear-animate fadeInUpShorter appear-animation-visible"
                    data-animation-options="{
                                                'name': 'fadeInUpShorter', 'delay': '.2s'
                                            }"
                  >
                    <Img
                      src={img1}
                      width="386"
                      height="150"
                      alt="Timeline Node"
                    />
                  </span>
                </article>

                <article className="timeline-box right">
                  <div className="timeline-content">
                    <h2
                      className="font-weight-bolder text-dark appear-animate zoomIn appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'zoomIn', 'delay': '.2s'
                                                }"
                    >
                      02.
                    </h2>
                    <h4
                      className="timeline-title text-white appear-animate fadeInLeftShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInLeftShorter', 'delay': '.2s'
                                                }"
                    >
                      The Most Fashionalbe Design By Top Level Designers
                    </h4>
                    <div
                      className="appear-animate fadeInLeftShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInLeftShorter', 'delay': '.2s'
                                                }"
                    >
                      <p className="mb-0 text-white">
                        All of the UX/UIs in Wolmart are made by famous
                        designers with long-ranged visions. You will be able to
                        have a great feeling from Wolmart.
                      </p>
                    </div>
                  </div>
                  <span
                    className="timeline-node appear-animate fadeInUpShorter appear-animation-visible"
                    data-animation-options="{
                                                'name': 'fadeInUpShorter', 'delay': '.2s'
                                            }"
                  >
                    <Img
                      src={img2}
                      alt="Timeline Node"
                      width="386"
                      height="150"
                    />
                  </span>
                </article>

                <article className="timeline-box left">
                  <div className="timeline-content">
                    <h2
                      className="font-weight-bolder text-dark appear-animate zoomIn appear-animation-visible"
                      data-animation-options="{'name': 'zoomIn', 'delay': '.2s'}"
                    >
                      03.
                    </h2>
                    <h4
                      className="timeline-title text-white appear-animate fadeInRightShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'delay': '.3s'
                                                }"
                    >
                      Tons of Marketplace Toolkit
                    </h4>
                    <div
                      className="appear-animate fadeInRightShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'delay': '.4s'
                                                }"
                    >
                      <p className="mb-0 text-white">
                        Wolmart offers an extemely wide range of toolkits that
                        helps you build marketplace including shop, product and
                        multi-vendor pages.
                      </p>
                    </div>
                  </div>
                  <span
                    className="timeline-node appear-animate fadeInUpShorter appear-animation-visible"
                    data-animation-options="{
                                                'name': 'fadeInUpShorter', 'delay': '.3s'
                                            }"
                  >
                    <Img
                      src={img3}
                      alt="Timeline Node"
                      width="386"
                      height="150"
                    />
                  </span>
                </article>

                <article className="timeline-box right">
                  <div className="timeline-content">
                    <h2
                      className="font-weight-bolder text-dark appear-animate zoomIn appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'zoomIn', 'delay': '.2s'
                                                }"
                    >
                      04.
                    </h2>
                    <h4
                      className="timeline-title text-white appear-animate fadeInLeftShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInLeftShorter', 'delay': '.3s'
                                                }"
                    >
                      Full Responsive &amp; Mobile Optimized
                    </h4>
                    <div
                      className="appear-animate fadeInLeftShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInLeftShorter', 'delay': '.4s'
                                                }"
                    >
                      <p className="mb-0 text-white">
                        Each &amp; every function of this amazing template will
                        run impeccably in almost every device like - desktop,
                        laptop, tablets and mobile phone
                      </p>
                    </div>
                  </div>
                  <span
                    className="timeline-node appear-animate fadeInUpShorter appear-animation-visible"
                    data-animation-options="{
                                                'name': 'fadeInUpShorter', 'delay': '.3s'
                                            }"
                  >
                    <Img
                      src={img4}
                      alt="Timeline Node"
                      width="386"
                      height="150"
                    />
                  </span>
                </article>

                <article className="timeline-box left">
                  <div className="timeline-content">
                    <h2
                      className="font-weight-bolder text-dark appear-animate zoomIn appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'zoomIn', 'delay': '.2s'
                                                }"
                    >
                      05.
                    </h2>
                    <h4
                      className="timeline-title text-white appear-animate fadeInRightShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'delay': '.3s'
                                                }"
                    >
                      Always Keep updates
                    </h4>
                    <div
                      className="appear-animate fadeInRightShorter appear-animation-visible"
                      data-animation-options="{
                                                    'name': 'fadeInRightShorter', 'delay': '.4s'
                                                }"
                    >
                      <p className="mb-0 text-white">
                        Constant regular updates with modern design concepts and
                        new technology keeps Wolmart always fashionable among
                        the marketplace world
                      </p>
                    </div>
                  </div>
                  <span
                    className="timeline-node appear-animate fadeInUpShorter appear-animation-visible"
                    data-animation-options="{
                                                'name': 'fadeInUpShorter', 'delay': '.3s'
                                            }"
                  >
                    <Img
                      src={img5}
                      alt="Timeline Node"
                      width="386"
                      height="150"
                    />
                  </span>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
