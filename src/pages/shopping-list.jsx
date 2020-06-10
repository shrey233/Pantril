import React from "react";
import { connect } from "react-redux";
import {
  ListGroup,
  Button,
  Alert,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter
} from "reactstrap";
import { TiDocumentText } from "react-icons/ti";
import { clear, createList } from "../store/shopping-list/actions";
import { getUser } from "../store/user/selector";
import { useAuth0 } from "../react-auth0-spa";
import Layout from "../components/layout/layout";
import ProductItem from "../components/product-item/product-item";
import Spinner from "./../components/spinner/spinner";
import TopMenu from "../../src/components/top-menu/top-menu";
import styles from "./shopping-list.module.css";

const ShoppingListPage = ({
  products,
  tempProducts,
  listLoading,
  clear,
  user,
  listCreated,
  createList
}) => {
  const { isAuthenticated, loading, loginWithRedirect } = useAuth0();

  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle}>
      &times;
    </button>
  );

  React.useEffect(() => {
    if (!isAuthenticated && !loading) {
      setModal(true);
    }
  }, [isAuthenticated, loading]);

  if (listLoading || loading) {
    return (
      <Layout title="Your Shopping List">
        <Spinner />
      </Layout>
    );
  }

  return (
    
    <Layout title="Your Shopping List">
      <>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle} close={closeBtn}>
            Pantrilist
          </ModalHeader>
          <ModalBody>
            Don't forget to sign in to save your shopping list
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              OK
            </Button>
          </ModalFooter>
        </Modal>

        {products.length === 0 && tempProducts.length === 0 && (
          <div className="d-flex flex-column justify-content-center align-items-center pt-5">
            <TiDocumentText color="grey" size={200} />
            <p className={styles.emptyList}>Shopping List is Empty</p>
          </div>
        )}

        {((products && products.length > 0) ||
          (tempProducts && tempProducts.length > 0)) && (
          <>
            {!isAuthenticated && (
              <Alert
                color="danger"
                className="mt-3 d-flex justify-content-between"
              >
                Sign in to save your shopping list
                <Button
                  color="info"
                  onClick={() => {
                    localStorage.setItem(
                      "shoppingList",
                      JSON.stringify(products)
                    );

                    loginWithRedirect({
                      mode: "signUp",
                      appState: {
                        targetUrl: "/shopping-list"
                      }
                    });
                  }}
                >
                  Sign In / Sign Up
                </Button>
              </Alert>
            )}
            {/**
             * This code does not work the issue is to
             *  place the code side by side against the products in 
             * order to complete the backend function.
             * <Container classname=sidebar>
             * <form>
             * <div> 
             * 
             *   <button classname="newlist"> Create New List </button>
             *   
             * </div>
             * </form>
             * </Container>
             * 
             */}

            {!listCreated &&
              isAuthenticated &&
              products.length > 0 &&
              tempProducts.length > 0 && (
                <Alert
                  color="info"
                  className="mt-3 d-flex flex-column align-items-center"
                >
                  <p className="mb-3">
                    Looks like you already have a shopping list saved to your
                    personal Pantrilist account. Do you want to save the current
                    list against existing shopping list or create a new one?
                  </p>
                  <Button
                    color="info"
                    className="mb-3"
                    style={{ minWidth: "330px" }}
                    onClick={() => createList(false, user)}
                  >
                    Save Against Exisitng Shopping List
                  </Button>
                  <Button
                    color="info"
                    className="mb-3"
                    style={{ minWidth: "330px" }}
                    onClick={() => createList(true, user)}
                  >
                    Create New Shopping List
                  </Button>
                </Alert>
              )}

            <ListGroup>
              {tempProducts.length > 0
                ? tempProducts.map(product => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      inShoppingList={true}
                    />
                  ))
                : products.map(product => (
                    <ProductItem
                      key={product.id}
                      product={product}
                      inShoppingList={true}
                    />
                  ))}
            </ListGroup>

            <div className="d-flex justify-content-center mt-3">
              <Button color="danger" onClick={() => clear(user)}>
                Clear List
              </Button>
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

const mapStateToProps = state => {
  const { products, tempProducts, loading, listCreated } =
    state.shoppingList || {};

  return {
    products,
    tempProducts,
    listCreated,
    listLoading: loading,
    user: getUser(state)
    
  };
};

export default connect(mapStateToProps, { clear, createList })(
  ShoppingListPage
);
