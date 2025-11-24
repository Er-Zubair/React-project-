import React from 'react';
import "./campus.css";
// Import images
import gallery1 from '../../assets/gallery1.jpg';
import gallery2 from '../../assets/gallery2.jpg';
import gallery3 from '../../assets/gallery3.jpg';
import gallery4 from '../../assets/gallery4.jpg';
import gallery5 from '../../assets/gallery5.jpg';

// Define the gallery data as an array of objects
const galleryImages = [
  { id: 1, src: gallery1, alt: "Modern library with study pods" },
  { id: 2, src: gallery2, alt: "Students collaborating on a project outdoors" },
  { id: 3, src: gallery3, alt: "Aerial view of the main university building" },
  { id: 4, src: gallery4, alt: "University dining hall during lunch" },
  { id: 5, src: gallery5, alt: "Sports field with students playing soccer" },
];

const Campus = () => {
  return (
    <section className='campus' aria-labelledby="campus-gallery-heading">
      <h2 id="campus-gallery-heading" className="section-title">Campus Gallery</h2> 
      
      <div className="gallery" role="list">
        {galleryImages.map((image) => (
          <div key={image.id} className="gallery-item" role="listitem">
            <img 
              src={image.src} 
              alt={image.alt} // IMPORTANT: Use descriptive alt text for accessibility
              loading="lazy" // IMPROVEMENT: Improves performance by loading images as they scroll into view
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Campus;