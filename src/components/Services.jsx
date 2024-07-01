import React from 'react';
import "./services.css";
const Services = () => {
  return (
    <div className="service-body">
      <div className="container-service">
        <h3 style={{ color: '#2097f9' }}>{'//'} Service</h3>
        <div style={{ marginBottom: '10px' }} className="c-head">
          What we do here
        </div>
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center me-2 mb-2"
        >
          SERVICES <i className="fa-solid fa-angle-right"></i>
        </button>
        <div className="cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="card">
            <div className="icon">
              <img
                src="https://eurtech-react.vercel.app/assets/img/service/icon/service-icon-1.png"
                alt="SEO Icon"
              />
            </div>
            <h3>SEO Monitoring</h3>
            <p>The quality data, best network uptime, fastest output.</p>
            <a href="#" className="read-more">
            {'//'} Read More
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img
                src="https://eurtech-react.vercel.app/assets/img/service/icon/service-icon-2.png"
                alt="Server Security Icon"
              />
            </div>
            <h3>Server Security</h3>
            <p>The quality data, best network uptime, fastest output.</p>
            <a href="#" className="read-more">
            {'//'} Read More
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img
                src="https://eurtech-react.vercel.app/assets/img/service/icon/service-icon-3.png"
                alt="UX/UI Strategy Icon"
              />
            </div>
            <h3>UX/UI Strategy</h3>
            <p>The quality data, best network uptime, fastest output.</p>
            <a href="#" className="read-more">
            {'//'} Read More
            </a>
          </div>
          <div className="card">
            <div className="icon">
              <img
                src="https://eurtech-react.vercel.app/assets/img/service/icon/service-icon-4.png"
                alt="Analysis Tools Icon"
              />
            </div>
            <h3>Analysis Tools</h3>
            <p>The quality data, best network uptime, fastest output.</p>
            <a href="#" className="read-more">
              {'//'} Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
