import React from 'react';
import './About.css';
import Title from '../Title/Title';          // ← Fixed path (most common structure)
import aboutImg from '../../assets/about.jpg'; // ← Add your image here!

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        
        {/* Reusable Title Component */}
        <Title 
          subtitle="About University" 
          title="Nurturing Tomorrow's Leaders Today" 
        />

        <div className="about-content">
          {/* Left - Image */}
          <div className="about-left">
            <img 
              src={aboutImg} 
              alt="Students collaborating in modern campus" 
              className="about-img"
            />
            <div className="about-img-overlay">
              <div className="about-stats">
                <div className="stat">
                  <h3>50+</h3>
                  <p>Years of Excellence</p>
                </div>
                <div className="stat">
                  <h3>25K+</h3>
                  <p>Successful Graduates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div className="about-right">
            <p className="about-text">
              Our university has been a beacon of academic excellence and innovation for over five decades. 
              We believe in holistic education that combines rigorous academics with real-world application.
            </p>
            <p className="about-text">
              Our curriculum is constantly reviewed and updated in collaboration with industry leaders to ensure 
              relevance in a rapidly changing world. We emphasize interdisciplinary studies, connecting the arts, 
              sciences, and humanities to train minds capable of complex, holistic problem-solving.
            </p>
            <p className="about-text highlight">
              From cutting-edge research labs to dedicated innovation hubs and entrepreneurship programs, 
              we provide students with the tools and resources to turn ambitious ideas into real-world impact.
            </p>

            <div className="about-features">
              <div className="feature">
                <span className="icon">🎓</span>
                <p>World-Class Faculty</p>
              </div>
              <div className="feature">
                <span className="icon">🔬</span>
                <p>State-of-the-Art Facilities</p>
              </div>
              <div className="feature">
                <span className="icon">🌍</span>
                <p>Global Network</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;