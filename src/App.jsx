import React from 'react';
import Navbar from './Components/navbar/Navbar';
import Hero from './Components/hero/Hero';
import Program from './Components/programs/Program';
import Title from './Components/Title/Title';
import About from './Components/about/About';
import Campus from './Components/campus/Campus'; 
import './index.css'; 
import Contact from './Components/Contact/Contact';
import Testimonial from './Components/Testimonail/Testimonial';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="container"> 
        <Title 
          subtitle="Our Program" 
          title="What We Offer" 
        />
        <Program />
        <Campus />
        <About />
        <Testimonial />
        <Contact />
      </div>
    </>
  );
};

export default App;