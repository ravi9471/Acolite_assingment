import React from "react";
import "../Style.css";

const Footer = () => {
  return (
    <footer className="footer">
       <hr className="footer-line" />
      
      <div className="social-links">
        <img className='img_media' src="public\facebook.png" alt="facebook"></img>
        <img className='img_media' src="public\twitter.png" alt="twitter"></img>
        <img className='img_media' src="public\Linkdin.png" alt="linkdin"></img>
        <img className='img_media' src="public\Gmail.jpg" alt="gmail"></img>
      </div>
      <div>
        <p className="disclaimer">The information provided on this website is for informational purposes only and should not be considered financial, legal, or professional advice. Citizens Bank does not guarantee the accuracy, completeness, or reliability of the content presented. All loan products, interest rates, and terms are subject to change without prior notice and may vary based on creditworthiness, eligibility, and other factors.</p>
      </div>
      <div>
        <p>© 2025 Citizens Bank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
