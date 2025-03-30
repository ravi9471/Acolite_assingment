import React from 'react'
import mainImage from '../assets/TestPage-Desktop.png'
import "../Style.css";

function CompanyMainImage() {
  return (
    <div>
        <img src={mainImage} alt="company_main_logo" className="mainImage" />
    </div>
  )
}

export default CompanyMainImage