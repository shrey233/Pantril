import React from "react";
import {
  Button,
  ButtonGroup,
  CustomInput,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  Modal,
  ModalHeader,
  ModalBody,
  Container,
  NavbarBrandProps,
  //NavDropdown, 
} from "reactstrap";
import { FaAngleLeft, FaShoppingBasket } from "react-icons/fa";
import { Link, Redirect } from "react-router-dom";
import styles from "./top-menu.module.css";
import { useAuth0 } from "../../react-auth0-spa";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/Form';
const TopMenu = () => {
  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  return (
  <>

  <Navbar bg="dark" variant="dark" classname={styles.logo}>
    <Navbar.Brand href="/">Pantrilist</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
      <Nav.Link href="/terms-of-use">Terms of Use</Nav.Link>
      <Nav.Link href="/shopping-list">Shopping List</Nav.Link>
      </Nav>
      <Nav>
      {!isAuthenticated && (
              <Nav.Link
                
                onClick={() => loginWithRedirect({ mode: "signUp" })}
              >
                Sign In / Sign Up
              </Nav.Link>
             
              )}
              {isAuthenticated && (
              <Nav.Link
              color="light"
              outline
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log out
              </Nav.Link>
            )}
            <Nav.Link to="/shopping-list" className="btn btn">
        <FaShoppingBasket size={22} />
           </Nav.Link>
    </Nav>
   {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
   */}
  </Navbar>

{/*
  <div className={`sticky-top ${styles.topMenu}`}>
    <div className="container">
      <nav className="nav justify-content-start">

          
          <Link to="" className="btn btn-outline-light">
          Home
        </Link>
        <Link to="/about" className="btn btn-outline-light">
          About
        </Link>        
        <Link to="/privacy-policy" className="btn btn-outline-light">
          Privacy Policy
        </Link>
        <Link color="light"
            outline 
            to="/terms-of-use" className="btn btn-outline-light">
          Terms of Use
        </Link> 
        <Link to="/shopping-list" className="btn btn-outline-light">
        <FaShoppingBasket size={22} />
           </Link>


        {!isAuthenticated && (
              <Button
                color="light"
                outline
                onClick={() => loginWithRedirect({ mode: "signUp" })}
              >
                Sign In / Sign Up
              </Button>
             
              )}

           {isAuthenticated && (
              <Button
              color="light"
              outline
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log out
              </Button>
            )}
                  
       {/* <React.Fragment>
      
    
      
        title={`${match.params.categoryId} (${data.filteredCount} of ${data.totalCount})`}
        isHeaderSticky={true}
      >
        <SearchProducts>
        
        </SearchProducts>
        <ListGroup>
          {data.products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </ListGroup>
      </React.Fragment>
          

      </nav>
    
    </div>
    <span className={styles.logo}>Pantrilist</span>
  </div>
        
*/}



  </>
  );
};

export default TopMenu;
