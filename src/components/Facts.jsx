import React from 'react';
import "./facts.css";
const Facts = () => {
  return (
    <div className="facts-container">
      <div className="left-side">
        <div className="facts">// Some Facts</div>
        <h1 className="fact-head">The best customer experience</h1>
        <div className="stats">
          <p>Design & Servicing</p>
          <div className="stat">
            <div className="progress-bar">
              <div className="fill" style={{ width: '64%' }}></div>
            </div>
            <span>64%</span>
          </div>
          <p>Support & Productivity</p>
          <div className="stat">
            <div className="progress-bar">
              <div className="fill" style={{ width: '82%' }}></div>
            </div>
            <span>82%</span>
          </div>
          <p>Troubleshooting</p>
          <div className="stat">
            <div className="progress-bar">
              <div className="fill" style={{ width: '70%' }}></div>
            </div>
            <span>70%</span>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img
          src="https://eurtech-react.vercel.app/assets/img/skill/skills-img.png"
          alt="Customer Experience Image"
        />
        <div className="play-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-play-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Facts;
