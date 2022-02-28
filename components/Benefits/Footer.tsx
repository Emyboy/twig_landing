import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer
      className="footer text-center float-bg "
      data-animation-options="{
            'name': 'fadeIn', 'delay': '.4s'
        }"
      id="section-support"
      style={{
        backgroundImage: `url(&quot;assets/landing/images/footer-bg.jpg&quot;)`,
        backgroundSize: "110%",
        backgroundColor: "rgb(34, 36, 39)",
        backgroundPosition: "-146px -18px",
        animationDuration: "0.9s",
      }}
    >
      <div className="footer-middle" id="footer-middle">
        <div className="container">
          <h2
            className="section-title text-white lh-1 mb-0 ls-10 "
            data-animation-options="{
                    'name': 'fadeIn', 'delay': '.2s'
                    }"
            style={{ animationDuration: "0.9s" }}
          >
            Build Your Website With Wolmart
          </h2>
          <h3
            className="section-subtitle text-white ls-normal mt-2 font-weight-extrabold "
            data-animation-options="{
                    'name': 'fadeIn', 'delay': '.6s'
                    }"
            style={{ animationDuration: "0.9s" }}
          >
            Purchase Now, Only
            <span className="text-primary">$25!</span>
          </h3>
          <p
            className="section-desc mx-auto mb-10 text-white "
            data-animation-options="{
                    'name': 'fadeIn', 'delay': '.4s'
                    }"
            style={{ animationDuration: "0.9s" }}
          >
            Wolmarts strict coding standards based high performance and
            lifetime updates with fashionable design and new features will keep
            your site always fashionable.
          </p>
          <a
            href="https://d-themes.com/buynow/wolmarthtml"
            className="btn btn-rounded btn-gradient btn-dark btn-purchase grad-reverse mb-10 "
            data-animation-options="{
                        'name': 'fadeIn', 'delay': '.8s'
                        }"
            style={{ animationDuration: "0.9s" }}
          >
            Buy Wolmart Now!
          </a>
          <div className="row justify-content-center cols-md-2 cols-lg-3 gutter-lg mb-6 mt-1">
            <div className="mb-6">
              <a
                className="icon-box hover-gradient appear-animate zoomIn appear-animation-visible"
                data-animation-options="{
                                    'name': 'zoomIn', 'delay': '.6s'
                                }"
                href="documentation.html"
                style={{ animationDuration: "0.9s" }}
              >
                <span className="icon-box-icon pt-1 pb-1">ICON</span>
                <h4 className="icon-box-title ls-l text-white">
                  Online Documentation
                </h4>
              </a>
            </div>
            <div className="mb-4">
              <a
                className="icon-box hover-gradient appear-animate zoomIn appear-animation-visible"
                data-animation-options="{
                                    'name': 'zoomIn', 'delay': '.7s'
                                }"
                href="documentation.html"
                style={{ animationDuration: "0.9s" }}
              >
                <span className="icon-box-icon pt-1 pb-1">ICON</span>
                <h4 className="icon-box-title ls-l text-white">
                  Video Tutorials
                </h4>
              </a>
            </div>
            <div className="mb-4">
              <a
                className="icon-box hover-gradient appear-animate zoomIn appear-animation-visible"
                data-animation-options="{
                                    'name': 'zoomIn', 'delay': '.8s'
                                }"
                href="https://d-themes.com/support"
                style={{ animationDuration: "0.9s" }}
              >
                <span className="icon-box-icon pt-2 pb-2">ICON</span>
                <h4 className="icon-box-title ls-l text-white">
                  Support Center
                </h4>
              </a>
            </div>
          </div>
          <ul
            className="social-icons mb-5 pb-3 appear-animate fadeInUpShorter appear-animation-visible"
            data-animation-options="{
                    'name': 'fadeInUpShorter', 'delay': '1.1s'
                    }"
            style={{ animationDuration: "0.9s" }}
          >
            <li className="social-icons-facebook">
              <a
                href="https://www.facebook.com/"
                rel="noreferrer"
                target="_blank"
                title="Facebook"
              >
                ICON
              </a>
            </li>
            <li className="social-icons-twitter">
              <a
                href="https://www.twitter.com/"
                rel="noreferrer"
                target="_blank"
                title="Twitter"
              >
                ICON
              </a>
            </li>
            <li className="social-icons-instagram">
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
                title="Instagram"
              >
                ICON
              </a>
            </li>
            <li className="social-icons-youtube">
              <a
                href="https://www.youtube.com/"
                rel="noreferrer"
                target="_blank"
                title="Youtube"
              >
                ICON
              </a>
            </li>
            <li className="social-icons-pinterest">
              <a
                href="https://www.pinterest.com/"
                rel="noreferrer"
                target="_blank"
                title="Pinterest"
              >
                ICON
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="mb-0">
            Copyright © {new Date().getFullYear()} Twigtrader. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
