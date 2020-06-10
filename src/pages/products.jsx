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
  Dropdown
} from "reactstrap";
import styles from "./products-module.css";
import queryString from "query-string";
import axios from "axios";
import Layout from "../components/layout/layout";
import ProductItem from "../components/product-item/product-item";
import Spinner from "./../components/spinner/spinner";
import Subcategoryfilter from "../components/Subcategory-filter/Subcategory-filter";
import layout from "../components/layout/layout";
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, Redirect } from "react-router-dom";
import SearchProduct from "./../components/searchcat/Search";



const ProductsPage = ({ location, match, history }) => {
  const [data, setData] = React.useState(null);
  const [filterExclude, setFilterExclude] = React.useState([]);
  const [filterInclude, setFilterInclude] = React.useState([]);


  const [mayContain, setMayContain] = React.useState(false);

 
const [search,setSearch] = React.useState("");
const [query, setQuery] = React.useState ('')



  React.useEffect(() => {
    if (!data) {
      const paramValues = queryString.parse(location.search);
      const filter = JSON.parse(paramValues.filter);

      axios
        .get( 
          `${process.env.REACT_APP_API_URL}/products/${match.params.categoryId}`,
          filter
        )
        .then(res => {
          setData(res.data);
                  
          
        })
        .catch(() => {
          history.push({
            pathname: "/error"
          });
        });
    }
  }, [query]);

  

  if (!data) {
    return <Spinner />;
  }

 
  const updateSearch = e =>
{
  setSearch(e.target.value);
}

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('products');
  }



  return (
    
      
    


    <Layout
      title={`${match.params.ProductItem} (${data.filteredCount} of ${data.totalCount})`}
      isHeaderSticky={false}>
     
    {/* <Link to={`/fruitSubcategories/${category.id}?filter=${match.params.filter}`}className="btn btn-outline-light">
          fruit subs
        </Link>  
  */}
   
        <Button
        onClick={() =>
    history.push(
      `/fruitSubcategories/${JSON.stringify({
        allergens: filterExclude,
        mayContain: mayContain,
        lifestyle: filterInclude
      })}`
    )
  }
  >
    Fruit Subs
  </Button>
     <button onclick="myFunction()">Try it</button>

     <Button
        onClick={() =>
    history.push(
      `/meatSubcategories/${JSON.stringify({
        allergens: filterExclude,
        mayContain: mayContain,
        lifestyle: filterInclude
      })}`
    )
  }
  >
    Meat Subs
  </Button>
     <button onclick="myFunction()">Try it</button>

     
<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" className = "mr-sm-2" >
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
      <option>E</option>   
      <option>F</option>
      <option>G</option>
      <option>H</option>
      <option>I</option>
      <option>J</option>
      <option>K</option>
      <option>L</option>
      <option>M</option>
      <option>N</option>
      <option>O</option>   
      <option>P</option>
      <option>Q</option>
      <option>R</option>
      <option>S</option>
      <option>T</option>
      <option>U</option>
      <option>V</option>   
      <option>W</option>
      <option>X</option>
      <option>Y</option>
      <option>Z</option>
    </Form.Control>
  </Form.Group> 
  <Form>
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Fruit`}
      />    
    </div>
  ))}
  {['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">
      <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Vegetables`}
      />     
    </div>
  ))}
</Form>

      /*
      <ListGroup className={styles.link} >
      <ul>
        {data.products.map(product => (
          <li key={product.id}>
            <a>{product.name}</a>
           
          </li>
        ))}
      </ul>
          
      <Form onSubmit={getSearch} className= "search-form">
        <input className = "search-bar" type="text" value={search} onChange={updateSearch} />
         <button className = "search-button" type ="submit">
         Search
         </button>
      </Form> 

        {data.products.map(product => ( //filter javascript
          <ProductItem  
          key={product.id} 
          product={product} 
          />
        ))} 
      </ListGroup>
          
    
      
        
      



    </Layout> 

    
  );
};

export default ProductsPage;
