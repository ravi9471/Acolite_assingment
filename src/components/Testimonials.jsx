import React from "react";
import "../Style.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial">
        <img src="TestPage-Desktop1.png" alt="Client" className="testimonial-img" />
        <p>"Citizens has given me the tools I need to succeed!"</p>
        <h4>John Smith</h4>
      </div>
      <div className="testimonial">
        <img src="TestPage-Desktop2.png" alt="Client" className="testimonial-img" />
        <p>"I love the support and community at Citizens."</p>
        <h4>Lisa Taylor</h4>
      </div>
      <div className="testimonial">
        <img src="TestPage-Desktop3.png" alt="Client" className="testimonial-img" />
        <p>"A great place to grow your career!"</p>
        <h4>Mike Johnson</h4>
      </div>
    </section>
  );
};

export default Testimonials;
