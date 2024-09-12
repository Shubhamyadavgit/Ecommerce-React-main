import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="contact-section">
        <div className="contact-text">
          <h3>Ready to get Started?</h3>
          <h3>Talk to us Today</h3>
        </div>
        <button className="get-started-button">
          <NavLink to="/contact">Get Started</NavLink>
        </button>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sequi! Quia ducimus ullam deleniti nemo, quibusdam accusantium recusandae eos neque error atque porro enim corrupti eaque perferendis accusamus, tempora placeat.</p>
          </div>
          <div className="subscribe">
            <h3>Subscribe to get important updates</h3>
            <p>Sign up to receive our latest updates and offers.</p>
          </div>
          <div className="footer-social">
            <h3>Follow us</h3>
            <div className="footer-social-icons">
              <GitHubIcon />
              <InstagramIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="footer-contact">
            <h3>Call Us</h3>
            <p>123-456-7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
