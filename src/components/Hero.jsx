import React from 'react';
import './hero.css'
const Hero = () => {
  return (
    <div className="container-started">
      <div className="row">
        <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-10">
          <div className="hero__content">
            <span>We Provide Outsourced</span>
            <h2 className="font-bold">IT Solution</h2>
            <p>
              IT producers worldwide face similar challenges around animal welfare,
              farm profitability, product and work efficiency.
            </p>
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Get Started <i className="fa-solid fa-angle-right"></i>
            </button>
            <div className="hero__btn-link">
              <ul>
                <li>
                  <span className="hero__video-btn popup-video">
                    <i className="fa-solid fa-play"></i>
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <span className="intro-video">INTRO VIDEO</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
