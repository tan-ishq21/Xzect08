import React from 'react';
import "./casestudies.css";
const CaseStudies = () => {
  const caseStudies = [
    {
      imgSrc: 'https://eurtech-react.vercel.app/assets/img/portfolio/case/case-study-1.jpg',
      title: 'Case Study 1',
      description: 'Built and It system and random order.',
      link: 'https://eurtech-react.vercel.app/case-details/1',
    },
    {
      imgSrc: 'https://eurtech-react.vercel.app/assets/img/portfolio/case/case-study-2.jpg',
      title: 'Case Study 1',
      description: 'Description for Case Study 1.',
      link: 'https://eurtech-react.vercel.app/case-details/1',
    },
    {
      imgSrc: 'https://eurtech-react.vercel.app/assets/img/portfolio/case/case-study-3.jpg',
      title: 'Case Study 1',
      description: 'Description for Case Study 1.',
      link: 'https://eurtech-react.vercel.app/case-details/1',
    },
    {
      imgSrc: 'https://eurtech-react.vercel.app/assets/img/portfolio/case/case-study-4.jpg',
      title: 'Case Study 1',
      description: 'Description for Case Study 1.',
      link: 'https://eurtech-react.vercel.app/case-details/1',
    },
    // Add more case studies as needed
  ];

  return (
    <div className="case-study-container">
      <h3 className="portfolio">// portfolio</h3>
      <h1 className="title3">Case Studies</h1>
      <div className="card-container2">
        {caseStudies.map((study, index) => (
          <div key={index} className="card2">
            <img src={study.imgSrc} alt={study.title} />
            <div className="overlay2">
              <div className="text2">
                <h2>{study.title}</h2>
                <p>{study.description}</p>
                <a className="read-more" href={study.link}>
                  <p>Read More</p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
