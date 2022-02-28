import React from "react";

import IMG from 'next/image'

import img1 from "../../landing_asset/images/description/5-251x230.png";
import img2 from "../../landing_asset/images/description/3-530x355.jpg";
import img3 from "../../landing_asset/images/description/2-530x355.jpg";
import img4 from "../../landing_asset/images/description/6-294x47.png";
import img5 from "../../landing_asset/images/description/1-537x394.jpg";

type Props = {};

export default function WhoWeAre({}: Props) {
  return (
    <section className="description-section">
      <div className="container text-center">
        <h3
          className="section-title font-weight-bolder ls-10 lh-1  blurIn "
          data-animation-options="{
                            'name': 'blurIn', 'delay': '.2s'
                        }"
        >
          Great Gift For
          <br />
          e-Shop or Multi-Vendor Site
        </h3>
        <p
          className="section-desc text-default mx-auto  fadeIn "
          data-animation-options="{
                            'name': 'fadeIn', 'delay': '.8s'
                        }"
        >
          Wolmart is the best html template that helps you build your own e-shop
          or multi-vendor marketplace project like Amazon, eBay, etc. Wolmart
          provides the high coding standards template with modern and attractive
          UI/UX design following the trends of the best practises of code and
          design.
        </p>
        <div className="row mb-2">
          <div className="col-xl-8 col-lg-10 mx-auto">
            <div className="d-md-flex justify-content-center align-items-center mb-8">
              <div className="duplex-wrapper mb-6">
                <div
                  className="duplex   "
                  data-animation-options="{
                                            'name': '', 'delay': '.4s'
                                        }"
                >
                  <span
                    className="count text-white  blurIn "
                    data-animation-options="{
                                                'name': 'blurIn', 'delay': '.8s'
                                            }"
                  >
                    15+
                  </span>
                </div>
                <div
                  className="description  fadeIn "
                  data-animation-options="{
                                            'name': 'fadeIn', 'delay': '1s'
                                        }"
                >
                  <h4 className="font-weight-bold ls-25">Included Demos</h4>
                  <a
                    href="#section-demos"
                    className="btn btn-link btn-underline btn-icon-right btn-dark"
                  >
                    View Demos
                  </a>
                </div>
              </div>
              <span className="h-divider d-none d-md-block mb-6"></span>
              <div className="duplex-wrapper mb-6">
                <div
                  className="duplex   "
                  data-animation-options="{
                                            'name': '', 'delay': '.4s'
                                        }"
                >
                  <span
                    className="count text-white  blurIn "
                    data-animation-options="{
                                                'name': 'blurIn', 'delay': '.8s'
                                            }"
                  >
                    120+
                  </span>
                </div>
                <div
                  className="description  fadeIn "
                  data-animation-options="{
                                            'name': 'fadeIn', 'delay': '1s'
                                        }"
                >
                  <h4 className="font-weight-bold ls-25">Included Pages</h4>
                  <a
                    href="#section-demos"
                    className="btn btn-link btn-underline btn-icon-right btn-dark"
                  >
                    View Pages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="desc-img-wrapper">
          <IMG
            className="desc-window1  float-el  "
            data-animation-options="{
                                'name': '', 'delay': '.2s'
                            }"
            data-src={img1}
            src={img5}
            alt="description image"
            width="251"
            height="230"
          />
          <IMG
            className="desc-window2  float-el  "
            data-animation-options="{
                                'name': '', 'delay': '.8s'
                            }"
            data-src={img2}
            src={img2}
            alt="description image"
            width="530"
            height="355"
          />
          {/* <IMG
            className="desc-window3  float-el  "
            data-animation-options="{
                                'name': '', 'delay': '.6s'
                            }"
            data-src={img3}
            src={img3}
            alt="description image"
            width="530"
            height="355"
          /> */}
          <IMG
            className="desc-window4  float-el  "
            data-animation-options="{
                                'name': '', 'delay': '.4s'
                            }"
            data-src={img3}
            src={img3}
            alt="description image"
            width="294"
            height="247"
          />
          {/* <IMG
            className="desc-window5  float-el  "
            data-animation-options="{
                                'name': '', 'delay': '.6s'
                            }"
            data-src={img1}
            src={img1}
            alt="descripton image"
            width="251"
            height="230"
          /> */}
          {/* <IMG
            className="desc-window6  float-el  "
            data-animation-options="{
                                'name': '', 'delay': '.4s'
                            }"
            data-src={img5}
            src={img5}
            alt="description image"
            width="537"
            height="394"
          /> */}
        </div>
      </div>
    </section>
  );
}
