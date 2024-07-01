// components/Footer.jsx
import React from 'react';
import "./footer.css";
import Image from 'next/image';
const Footer = () => {
  return (
    <>
        <div className="footer-container py-8">
        <div className="footer-section">
        <h2>About Us</h2>
        <p>Learn from industry-leading speakers like Romain Guy and Chet Haase who have been building Android since 1.0
            Jhey Tompkins and Una Kravets from the Google Chrome team.</p>
        </div>
        <div className="footer-section">
        <h2 className="titles">Pages</h2>
        <div className="pages-list">
            <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Price & Plan</a></li>
            <li><a href="#">Case Study</a></li>
            <li><a href="#">404 Page</a></li>
            </ul>
            <ul>
            <li><a href="#">Our Terms</a></li>
            <li><a href="#">Faq</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Membership</a></li>
            </ul>
        </div>
        </div>
        <div className="footer-section">
        <h2>Our Services</h2>
        <ul>
            <li>Software Solution</li>
            <li>Digital Marketing</li>
            <li>UI & UX Design</li>
            <li>Web Development</li>
            <li>24/7 Online Support</li>
        </ul>
        </div>
        <div className="availability">
        <h2>Our Availability</h2>
        <div className="time">Mon - Fri<br/> <span> 10:00 am to 06:00 pm </span> </div>
        <div className="time">Saturday (1st & 4th)<br/> <span> 08:00 am to 04:00 pm </span> </div>
        <div className="emergency">
            <Image src="https://eurtech-react.vercel.app/assets/img/icon/footet/massege.png" alt="logo" />
            <p>Emergency Service<br/> 000 111 222 33</p>
        </div>
        </div>
    </div>
    <div className="nav-adjust py-4">
        <nav className="footer-navbar">
        <div className="footer-logo">
            <Image src="https://eurtech-react.vercel.app/assets/img/logo/logo-2.png" alt="Logo"/>
        </div>
        <div className="footer-nav-links">
            <a href="#">ABOUT</a>
            <a href="#">FAQ</a>
            <a href="#">CONTACT</a>
        </div>
        </nav>
    </div>
    <div className="nav-adjust">
        <div className="copyright">
        <p>Copyright & design by <span> {'@'}Tanishq Raj </span> - 2024 </p>
        </div>
    </div>
    </>
  );
};

export default Footer;
