import React from "react";
import "./css/hero.css";

function Hero() {
  return (
    <div className="container hero">
      <div className="flex-item">
        <h1 className="main-head">Sell, Buy {"&"} Exchange Pre Used.</h1>
        <h1>Without fear. Guaranteed.</h1>
        <p>Verified Profiles. Free Delivery. Online transactions only.</p>
      </div>

      <div className="flex-item">
        <img src="icons/card.jpeg" alt="card-images" className="hero-image" />
      </div>
    </div>
  );
}

export default Hero;
