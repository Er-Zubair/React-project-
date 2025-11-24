import React from 'react';
import './Testimonial.css';
import Title from '../Title/Title';
import employee1 from '../../assets/employers1.jpg';
import employee2 from '../../assets/employers2.jpg';
import employee3 from '../../assets/employers3.jpg';
import employee4 from '../../assets/employers4.jpg';
// import employee5 from '../../assets/employers(5).png';

// Sample testimonials (you can replace with real ones later)
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    course: "Bachelor's in Computer Science",
    image: employee1,
    text: "This university transformed my life. The faculty are world-class, and the hands-on projects prepared me perfectly for my dream job at Google.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    course: "Master's in Business Administration",
    image: employee2,
    text: "The support from career services and the strong alumni network helped me land a leadership role right after graduation. Truly life-changing!",
    rating: 5,
  },
  {
    id: 3,
    name: "Aisha Patel",
    course: "Bachelor's in Biomedical Engineering",
    image:employee3 ,
    text: "The research opportunities and state-of-the-art labs gave me experience that most students only dream of. I'm now pursuing my PhD at MIT!",
    rating: 5,
  },
  {
    id: 4,
    name: "David Ramirez",
    course: "Post Graduation in Data Science",
    image: employee4,
    text: "Incredible balance of theory and practice. The professors genuinely care about your success. Best decision I ever made!",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section" id="testimonials">
      <div className="container">

        <Title 
          subtitle="Testimonials" 
          title="What Our Students Say About Us" 
        />

        <div className="testimonials-carousel">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <img src={t.image} alt={t.name} className="author-img" />
                <div>
                  <h4>{t.name}</h4>
                  <p>{t.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple dot indicators */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <span key={index} className="dot"></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;