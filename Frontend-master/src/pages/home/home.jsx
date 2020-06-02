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

const HomePage = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  return (
    <>
      <div className={styles.hero}>
        {!loading && (
          <div className={styles.auth}>
            <div className={styles.menuItem}>
              <a href="https://pantrelist.food.blog/">Blog</a>
            </div>
            {!isAuthenticated && (
              <Button
                color="info"
                onClick={() => loginWithRedirect({ mode: "signUp" })}
              >
                Sign In / Sign Up
              </Button>
            )}

            {isAuthenticated && (
              <Button
                color="info"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log out
              </Button>
            )}
          </div>
        )}
        <span className={styles.logo}>Pantrilist</span>
        <h1 className={styles.header}>Discover food that fits you</h1>
        <a className={`btn btn-info ${styles.getStarted}`} href="#filter">
          Get Started
        </a>
      </div>

      <section id="filter">
        <Container>
          <div className="row justify-content-center mt-5 pb-2">
            <div className="col-md-12 text-center heading-section ">
              <h2>Create your allergen-free shopping list now</h2>
            </div>
          </div>

          <Filter />
        </Container>
      </section>

      <section
        className={`ftco-section img ${styles.backgroundImg3}`}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-7 makereservation p-4 px-md-5 pb-md-5">
              <div className="heading-section mb-5">
                <h2 className="mb-4">
                  Managing life with food allergy isn’t easy
                </h2>
                <div className="text-left">
                  <p>
                    Food is a fundamental part of many daily activities and
                    social events; families must be constantly vigilant to keep
                    loved ones safe from accidental exposure, even at home
                  </p>
                  <p>
                    There are two key reasons why grocery shopping presents a
                    higher burden:
                  </p>
                  <ul>
                    <li>
                      limited options due to poor product knowledge or ‘May
                      Contain’ warnings;
                    </li>
                    <li>checking product labels can be time consuming.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section short-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-12 text-center heading-section ">
              <h2 className="mb-4">Perfect for....</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src={shuffle}
                    width="70px"
                    height="70px"
                    alt="Discover food that fits your profile"
                  ></img>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">More Options</h3>
                  <p>Discover food that fits your profile</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src={improve}
                    width="70px"
                    height="70px"
                    alt="Pantrilist saves you time"
                  ></img>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Improved lifestyle</h3>
                  <p>Pantrilist saves you time</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <img
                    src={sale}
                    width="70px"
                    height="70px"
                    alt="Less checking. More shopping."
                  ></img>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">Convenience</h3>
                  <p>Less checking. More shopping.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`ftco-section short-section ${styles.warning}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h2> You must always read product labels</h2>
              <p>
                At Pantri your health and safety is of the upmost importance to
                us. That is why we implore you to always read the label of a
                product before consuming it, as product information in the
                Website is sourced from third parties. The product information
                may not be completely accurate or may have changed after it is
                provided to Pantri and Pantri has not independently verified the
                information provided. Please note that the information on
                Pantrilist is meant to be used as a guide only.
              </p>
            </div>
            <div className="col-md-2 align-self-center text-right">
              <FaGlasses size="125" />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`ftco-section short-section img ${styles.backgroundImg4}`}
        data-stellar-background-ratio="0.5"
      >
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-7 makereservation p-4 px-md-5 pb-md-5">
              <div className="heading-section mb-5">
                <div className="text-left">
                  <h4>
                    A convenient shopping experience for people with food
                    allergy and other dietary restrictions.
                  </h4>
                  <br />
                  <h4>
                    Pantrilist's smart food search and discovery app helps
                    families find appropriate products that fit them.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section testimony-section img">
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-12 text-center heading-section">
              <h2 className="mb-4">Our customer's story</h2>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6">
              <div className="item">
                <div className="testimony-wrap text-center pb-md-5">
                  <div
                    className={`user-img mb-4 ${styles.testimonials1}`}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="item">
                <div className="testimony-wrap text-center pb-md-5">
                  <div className="text p-3 text-left">
                    <p className="name">Meet Sally</p>
                    <p className="mb-4">
                      Sally has a young son – Lucas. At first glance, Lucas
                      presents as a typical energetic and inquisitive 3 year
                      old. However, Lucas suffers from severe, life threatening
                      anaphylaxis to cow’s milk and eggs.
                    </p>
                    <p>
                      Sally feels her food options at supermarkets are limited
                      and is unaware of all products available to fit her son’s
                      fragile dietary profile. Solving this problem is life or
                      death for Sally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-6 order-2 order-md-1">
              <div className="item">
                <div className="testimony-wrap text-center pb-md-5">
                  <div className="text p-3 text-left">
                    <p className="name">Meet Rebecca</p>
                    <p className="mb-4">
                      Rebecca is allergic to tree nuts. Her husband is gluten
                      intolerant. Their daughter is allergic to peanuts.
                    </p>
                    <p>
                      Every week, Rebecca finds her grocery shopping time
                      consuming – from researching food to checking and
                      rechecking labels before she buys and cooks. This is a
                      complicated problem that takes a lot of time for Rebecca
                      to solve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 order-1 order-md-2">
              <div className="item">
                <div className="testimony-wrap text-center pb-md-5">
                  <div
                    className={`user-img mb-4  ${styles.testimonials2}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section bg-light">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-2">
            <div className="col-md-12 text-center heading-section ">
              <h2 className="mb-4">How Pantrilist works</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <FaRegHandPointer />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">
                    Select allergens you want to avoid
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <FaRegWindowRestore />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">
                    Search and browse the product category
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch  text-center">
              <div className="media block-6 services d-block">
                <div className="icon d-flex justify-content-center align-items-center">
                  <span>
                    <FaShoppingBasket />
                  </span>
                </div>
                <div className="media-body p-2 mt-3">
                  <h3 className="heading">
                    Create a shopping list and take it with you in store
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section short-section">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h2>Create your allergen-free shopping list now</h2>
            </div>
            <div className="col-md-4 text-right">
              <a className="btn btn-info" href="#filter">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
