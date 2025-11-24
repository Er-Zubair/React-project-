import React from 'react';
import './Hero.css';
import heroImg from '../../assets/hero.png'; // ← Now correctly imported

const Hero = () => {
  return (
    <section className="hero">
      {/* Dark blue overlay for text readability */}
      <div className="hero-overlay"></div>

      {/* Background Image - now using the imported asset */}
      <img 
        src={heroImg} 
        alt="Students learning together" 
        className="hero-bg" 
      />

      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            We Ensure Better Education<br />for a Better World
          </h1>
          <p className="hero-text">
            Our cutting-edge curriculum is designed to empower students with the 
            knowledge, skills, and experiences needed to excel in the dynamic 
            field of education.
          </p>
          <button className="hero-btn btn">Explore More →</button>
        </div>
      </div>

      {/* Beautiful wave transition to next section */}
      <div className="wave"></div>
    </section>
  );
};

export default Hero;