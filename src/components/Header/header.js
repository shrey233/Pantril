import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaInstagram
} from "react-icons/fa";
import logo from "../../assets/logo.png";
import UNSWLogo from "../../assets/unsw-founders.png";
import styles from "./header-module.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-1">
        <div className="col-md-1 col-lg-10">
          <Link to="/">
            <img src={logo} alt="Pantrilist" height="100" />
          </Link>
          <p className="mt-3" style={{ width: "100%" }}>
            Pantrilist mission is to help you manage meal planning, grocery
            shopping and meal preparation better
          </p>
          <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-3">
            <li>
              <a
                href="https://www.facebook.com/pantrilist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaFacebookF />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/pantrilist"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaTwitter />
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pantrilist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <FaInstagram />
                </span>
              </a>
            </li>

            <li>
              <a href="tel:0415149800">
                <span>
                  <FaPhone />
                </span>
              </a>
            </li>
            <li>
              <a href="mailto:info@pantrilist.com">
                <span>
                  <FaEnvelope />
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-1 col-lg-1">
          <div className="ftco-footer-widget mb-4">
            
            <p>
              
            </p>
          </div>
        </div>
        
      </div>
    </div>
  </footer>
);

export default Footer;
