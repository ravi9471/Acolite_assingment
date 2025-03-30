import React from "react";
import "../Style.css";
import TestPage_Desktop1 from '../assets/TestPage-Desktop1.png'
import TestPage_Desktop2 from '../assets/TestPage-Desktop2.png'
import TestPage_Desktop3 from '../assets/TestPage-Desktop3.png'

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial">
        <img src={TestPage_Desktop1} alt="Client" className="testimonial-img" />
        <p>"Citizens has given me the tools I need to succeed!"</p>
        <h4>John Smith</h4>
      </div>
      <div className="testimonial">
        <img src={TestPage_Desktop2} alt="Client" className="testimonial-img" />
        <p>"I love the support and community at Citizens."</p>
        <h4>Lisa Taylor</h4>
      </div>
      <div className="testimonial">
        <img src={TestPage_Desktop3} alt="Client" className="testimonial-img" />
        <p>"A great place to grow your career!"</p>
        <h4>Mike Johnson</h4>
      </div>
    </section>
  );
};

export default Testimonials;
