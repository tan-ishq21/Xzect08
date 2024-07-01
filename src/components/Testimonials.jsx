import React from 'react';
import "./testimonials.css";
import Image from 'next/image';
const Testimonials = () => {
  return (
    <div className="main-testimonial">
      <div className="testi-title">
        <div className="testimonials">{'//'} Testimonials {'//'}</div>
        <h1>User feedbacks</h1>
      </div>
      <div className="testi-container">
        <div className="testi-content">
          <div className="testi-card">
            <p>
              {'"The worlds #1 web data platform from data collection infrastructure to ready-made datasets, brights to allow you to retrieve the public web data you care about."'}
            </p>
            <div className="user">
              <Image
                src="https://eurtech-react.vercel.app/assets/img/testimonial/author/author-01.png"
                alt="Miranda Helson"
              />
              <h4>Miranda Helson</h4>
              <p>, Head Of Idea</p>
            </div>
          </div>
          <div className="testi-card">
            <p>
              {'"The worlds #2 web data platform from data collection infrastructure to ready-made datasets, brights to allow you to retrieve the public web data you care about."'}
            </p>
            <div className="user">
              <Image
                src="https://eurtech-react.vercel.app/assets/img/testimonial/author/author-02.png"
                alt="Alexis D. Dowson"
              />
              <h4>Alexis D. Dowson</h4>
              <p>{','} Founder</p>
            </div>
          </div>
          <div className="testi-card">
            <p>
              {'"The worlds #3 web data platform from data collection infrastructure to ready-made datasets, brights tow allow you to retrieve the public web data you care about."'}
            </p>
            <div className="user">
              <Image
                src="https://eurtech-react.vercel.app/assets/img/testimonial/author/author-03.png"
                alt="Steven Smith"
              />
              <h4>Steven Smith</h4>
              <p>{', '} Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
