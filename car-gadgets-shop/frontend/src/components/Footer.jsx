import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h3>Gadget Source Ventures</h3>
          <p>Innovating the future, one gadget at a time.</p>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/products">Products</a>
          <a href="/cart">cart</a>
          <a href="/about">About</a>
          <a href="/admin panel">admin panel</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Gadget Source Ventures. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
