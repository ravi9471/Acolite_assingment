import React from "react";
import "../Style.css";
import facebook from '../assets//facebook.png'
import twitter from '../assets/twitter.png'
import linkdin from '../assets/linkdin.png'
import gmail from '../assets/gmail.jpg'

const Footer = () => {
  return (
    <footer className="footer">
       <hr className="footer-line" />
      
      <div className="social-links">
        <img className='img_media' src={facebook} alt="facebook"></img>
        <img className='img_media' src={twitter} alt="twitter"></img>
        <img className='img_media' src={linkdin} alt="linkdin"></img>
        <img className='img_media' src={gmail} alt="gmail"></img>
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
