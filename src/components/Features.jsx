import React from "react";
import "../Style.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature">
        <h3>Unique Products</h3>
        <p>We offer a diverse range of mortgage solutions tailored to meet the unique financial needs of our clients. Whether they are first-time homebuyers or looking to refinance, our flexible loan options provide competitive rates and hassle-free approvals.</p>
      </div>

      <div className="feature">
        <h3>Exceptional Support</h3>
        <p>At Citizens, we believe in empowering our loan officers with the best tools, training, and marketing strategies. Our dedicated support team ensures that you have access to cutting-edge technology, resources, and mentorship to help you thrive in your career.</p>
      </div>

      <div className="feature">
        <h3>Closing on Time, Every Time</h3>
        <p>We understand the importance of a seamless loan closing process. Our team works diligently to minimize delays, streamline documentation, and ensure that clients experience a smooth transition from application to closing—on time, every time.</p>
      </div>

      <div className="feature">
        <h3>You'll Have a Voice</h3>
        <p>Your ideas, feedback, and insights matter. At Citizens, we foster a collaborative environment where every loan officer is encouraged to share their perspective, influence decision-making, and contribute to the growth and success of our organization.</p>
      </div>
    </section>
  );
};

export default Features;
