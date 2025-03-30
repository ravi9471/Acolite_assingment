import React from "react";
import "../Style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero_head">Our investment in you.</h2>
        <p>
        As a Mortgage Loan Officer with Citizens, you'll have the opportunity to work directly with customers, guiding them through one of the most important financial decisions of their lives. You’ll provide trusted, personal product solutions, ensuring that clients receive the best financing options tailored to their needs.</p>
        <button className="cta-btn">View Careers</button>
        <h2 className="hero_head2">Get the Citizens advantage.</h2>
        <hr className="hero-line1" />
      </div>
    </section>
  );
};

export default Hero;
