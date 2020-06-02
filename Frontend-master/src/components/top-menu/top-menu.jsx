import React from "react";
import { Link } from "react-router-dom";
import styles from "./top-menu.module.css";

const TopMenu = () => (
  <div className={`sticky-top ${styles.topMenu}`}>
    <div className="container">
      <nav className="nav justify-content-end">
        <Link to="/" className="btn btn-outline-info">
          Home
        </Link>
      </nav>
    </div>
  </div>
);

export default TopMenu;
