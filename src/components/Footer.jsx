import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer justify-items-center bg-fixedOlive text-light py-10">
      <nav>
        <Link to="/">
          <h2 className="text-light text-5xl font-bold">
            R<span class="text-secondary">OO</span>MIO
          </h2>
          <div className="flex items-center ml-8 space-x-1 mt-2">
            <span className="text-secondary text-xl">★</span>
            <span className="text-secondary text-xl">★</span>
            <span className="text-secondary text-xl">★</span>
            <span className="text-secondary text-xl">★</span>
            <span className="text-secondary text-xl">★</span>
          </div>
        </Link>
        <p>
          Founded in 1998, Roomio Resort is located <br />
          in Dhaka, immersing you in the wonder <br />
          of the Turag against the pure sky. <br />
          Welcome to Roomio, Dhaka.
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">About Us</h6>
        <Link to="/about-us" className="link link-hover">
          Branding
        </Link>
        <Link to="/about-us" className="link link-hover">
          Design
        </Link>
        <Link to="/about-us" className="link link-hover">
          Marketing
        </Link>
        <Link to="/about-us" className="link link-hover">
          Advertisement
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Services</h6>
        <Link to="/all-rooms" className="link link-hover">
          Rooms
        </Link>
        <Link to="/gallery" className="link link-hover">
          Gallery
        </Link>
        <Link to="/packages-offers" className="link link-hover">
          Packages & Offers
        </Link>
      </nav>
      <nav>
        <h6 className="footer-title">Terms & Conditions</h6>
        <Link to="/terms-conditions" className="link link-hover">
          Terms of use
        </Link>
        <Link to="/terms-conditions" className="link link-hover">
          Privacy policy
        </Link>
        <Link to="/terms-conditions" className="link link-hover">
          Cookie policy
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
