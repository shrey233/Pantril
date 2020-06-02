import React from "react";
import { connect } from "react-redux";
import { Container, Badge } from "reactstrap";
import { FaAngleLeft, FaShoppingBasket } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import { deleteProduct, clear } from "../../store/shopping-list/actions";
import Footer from "./../footer/footer";
import styles from "./layout.module.css";

const Layout = ({ title, children, history, isHeaderSticky, products }) => {
  return (
    <>
      <div className={isHeaderSticky ? "sticky-top" : ""}>
        <Container>
          <div className={styles.header}>
            <button className={styles.back} onClick={() => history.goBack()}>
              <FaAngleLeft size={22} />
            </button>
            <h1 className={styles.title}>{title}</h1>
            <button
              className={styles.back}
              onClick={() => history.push("/shopping-list")}
            >
              <FaShoppingBasket size={22} />
              {products && products.length > 0 && (
                <Badge className={styles.badge} color="warning">
                  {products.length}
                </Badge>
              )}
            </button>
          </div>
        </Container>
      </div>
      <Container className={styles.container}>{children}</Container>
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  const { products } = state.shoppingList || {};

  return { products };
};

export default withRouter(
  connect(mapStateToProps, { deleteProduct, clear })(Layout)
);
