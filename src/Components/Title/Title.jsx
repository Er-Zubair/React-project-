import React from 'react';
import './Title.css'; // Create this file or add to global styles

const Title = ({ 
  subtitle = "Default Subtitle", 
  title = "Default Title", 
  align = "center", // left | center | right
  color = "dark",   // dark | light (for hero/dark backgrounds)
  className = "" 
}) => {
  return (
    <div className={`title-section text-${align} title-${color} ${className}`}>
      <p className="title-subtitle">{subtitle}</p>
      <h2 className="title-main">{title}</h2>
      <div className="title-underline"></div>
    </div>
  );
};

export default Title;