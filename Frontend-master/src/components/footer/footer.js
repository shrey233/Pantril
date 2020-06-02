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
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <div className="container">
      <div className="row mb-1">
        <div className="col-md-6 col-lg-4">
          <Link to="/">
            <img src={logo} alt="Pantrilist" height="100" />
          </Link>
          <p className="mt-3" style={{ width: "90%" }}>
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
        <div className="col-md-6 col-lg-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Good for Kids. Great for Parents</h2>
            <p>
              We created Pantrilist in 2018 after finding out that our son is
              anaphylaxis to cow’s milk (dairy) and egg.
            </p>
            <p>
              Pantrilist is a smart food search and discovery app that helps
              Australian families managing food allergies find products that fit
              their dietary needs.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Community</h2>
            <p>
              Pantrilist are proud participants of the UNSW Founders Programs
            </p>
          </div>
          <a href="https://www.founders.unsw.edu.au/">
            <img
              src={UNSWLogo}
              alt="UNSW Founders Programs"
              className={styles.logo}
              target="_blank"
              rel="noopener noreferrer"
            />
          </a>
        </div>
      </div>

      <div className={`row mb-3 ${styles.disclaimer}`}>
        <strong>Important: always read the label</strong>
        <small>
          Pantri’s service is not a substitute for reading the label of a
          product. The product information in the Website and App is sourced
          from third parties and Pantri has not independently verified it. You
          must always read the label of a product before consuming it, as
          information provided to Pantri may not be completely accurate or may
          change after it is provided to Pantri and therefore may not be
          immediately reflected within the product information provided within
          the App or Website.
        </small>
      </div>

      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            <Link className="mx-3" to="/terms-of-use">
              Terms of Use
            </Link>
            |
            <Link className="mx-3" to="/privacy-policy">
              Privacy Policy
            </Link>
          </p>
          <p>
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Pantrilist
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
