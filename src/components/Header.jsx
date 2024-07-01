import React from 'react';
import './header.css';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="main-logo mb-4">
        <Image src="https://eurtech-react.vercel.app/assets/img/logo/logo.png" alt="EurTech logo" />
      </div>
      <div className="contact-info">
        <div className="call-us flex items-center mb-4">
          <Image
            src="https://eurtech-react.vercel.app/assets/img/icon/header/header-icon-01.png"
            alt="Call us icon"
            className="mr-2"
          />
          <div>
            <span>Call Us Now</span>
            <span>
              <b>00 211 232 000</b>
            </span>
          </div>
        </div>
        <div className="email flex items-center mb-4">
          <Image
            src="https://eurtech-react.vercel.app/assets/img/icon/header/header-icon-02.png"
            alt="Email icon"
            className="mr-2"
          />
          <div>
            <span>Email Address</span>
            <span>
              <b>{'info@wemail.com'}</b>
            </span>
          </div>
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2"
        >
          Get Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
