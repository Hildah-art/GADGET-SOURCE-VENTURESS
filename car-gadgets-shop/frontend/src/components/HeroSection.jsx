import React from "react";

function HeroSection({ onShopNow }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Gadget Source Ventures 🚗</h1>
        <p>Your one-stop shop for high-quality car gadgets and accessories!</p>
        <button className="hero-btn" onClick={onShopNow}>Shop Now</button>
      </div>
    </section>
  );
}

export default HeroSection;
