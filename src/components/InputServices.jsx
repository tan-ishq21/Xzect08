import React from 'react';
import "./inputservices.css";
const InputServices = () => {
  return (
    <div className="input-services-container">
      <div className="ser-name">// services //</div>
      <div className="ser-head">What we do here</div>
      <div className="parent">
        <div className="input-field">
          <span className="icon">
            <i className="fa-solid fa-envelope-open"></i>
          </span>
          <input type="email" placeholder="Email address" />
        </div>
        <div className="input-field">
          <span className="icon">
            <i className="fa-brands fa-firefox-browser"></i>
          </span>
          <input type="text" placeholder="Website Name" />
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm px-5 py-5 text-center me-2 mb-2"
        >
          Test Speed <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default InputServices;
