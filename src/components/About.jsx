import React from 'react';
import "./about.css"
import img from "./img-1.jpg"
const About = () => {
  return (
    <div className="container-about">
      <div className="left-section">
        <img src={img.src} height="100%" width="100%" alt="about-img" />
      </div>
      <div className="right-section">
        <div className="about-us">
          <div className="about-us-text">// About Us</div>
        </div>
        <div className="heading-about">
          <div className="heading-text">Best in classy product near from you.</div>
        </div>
        <div className="description">
          <div className="description-text">
            From finance, retail, and travel, to social media, cybersecurity, adtech,
            and more, market leaders are leveraging web data to maintain their
            advantage. Discover how it can work for you.
          </div>
        </div>
        <div className="features">
          <div className="features-text">
            Highest quality data, #01 network uptime, fastest output. Unlimited scale and customizing possibilities.
          </div>
        </div>
        <div className="author">
          <div className="author-text">
            <b>Miranda Helson,</b> Head Of Idea
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          LEARN MORE <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default About;
