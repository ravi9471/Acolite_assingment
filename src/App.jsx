import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import "./Style.css";
import CompanyMainImage from "./components/CompanyMainImage";
import Loan from "./components/Loan";

function App() {
  return (
    <div className="container">
      <Header />
      <CompanyMainImage />
      <Hero />
      <Features />
      <Loan />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
