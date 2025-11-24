import React from 'react';
import './Program.css';
import masterImg from '../../assets/master.jpg';
import postGradImg from '../../assets/post-graduations.jpg';
import bachelorsImg from '../../assets/Graduation.jpg';

const Program = () => {
  const programs = [
    {
      title: "Master's Degree",
      img: masterImg,
      info: "2 Years Program",
      slug: "masters",
    },
    {
      title: "Post Graduation",
      img: postGradImg,
      info: "1-2 Years Program",
      slug: "post-grad",
    },
    {
      title: "Bachelor's Degree",
      img: bachelorsImg,
      info: "3-4 Years Program",
      slug: "bachelors",
    },
  ];

  return (
    <section className="programs-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">Our Programs</h2>
          <p className="section-subtitle">
            Choose from our wide range of world-class academic programs designed for your success.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="programs-grid">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`program-card ${program.slug}`}
              style={{ backgroundImage: `url(${program.img})` }}
            >
              <div className="program-overlay"></div>
              <div className="program-content">
                <span className="program-info">{program.info}</span>
                <h3 className="program-title">{program.title}</h3>
                <div className="program-arrow">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Program;