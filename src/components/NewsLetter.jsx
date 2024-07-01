import React from 'react';
import "./newsletter.css";
const Newsletter = () => {
  return (
    <div className="centerr">
      <div className="container-division">
        <div className="main-newsl">
          <div className="newsletter">
            // newsletter
          </div>
          <div className="parent2">
            <div className="user-feed">
              User feedbacks
            </div>
            <div className="input-field">
              <span className="icon"><i className="fa-solid fa-envelope-open"></i></span>
              <input type="email" placeholder="Email address" />
            </div>
            <div>
              <a className="button-test text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-bold rounded-lg text-sm py-5 px-6 text-center me-2 mb-2" href="#">
                NEWSLETTER
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
