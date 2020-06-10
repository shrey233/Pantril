import React from "react";
import { Container, Button } from "reactstrap";
import {
  FaRegHandPointer,
  FaRegWindowRestore,
  FaShoppingBasket,
  FaGlasses
} from "react-icons/fa";

import { useAuth0 } from "../../react-auth0-spa";
import styles from "./home.module.css";
import Footer from "../../components/footer/footer";
import Filter from "../../components/filter/filter";
import shuffle from "../../assets/shuffle.png";
import sale from "../../assets/sale.png";
import improve from "../../assets/Improve.png";
import Header from "../../components/Header/header";
import TopMenu from "../../components/top-menu/top-menu";
const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  return (
    <>
  <TopMenu />
  <Filter />
      <Footer />
    </>
  );
};

export default HomePage;
