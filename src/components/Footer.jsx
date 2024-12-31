import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-primary text-light p-10">
      <nav>
        <h2 className="text-light text-5xl font-bold">ROOMIO</h2>
        <p>
          Founded in 1998, Roomio Resort is located <br />
          in Dhaka, immersing you in the wonder <br />
          of the Turag against the pure sky. <br />
          Welcome to Roomio, Dhaka.
        </p>
      </nav>
      <nav>
        <h6 className="footer-title">About Us</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Experiences</h6>
        <a className="link link-hover">Dining</a>
        <a className="link link-hover">Spa & Wellness</a>
        <a className="link link-hover">Local Activities</a>
        <a className="link link-hover">Meetings</a>
        <a className="link link-hover">Our Menu</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
