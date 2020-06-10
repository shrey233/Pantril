import React, { useState } from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Layout from "../../components/layout/layout";
import styles from "./../categories.module.css";
import { LifestyleType } from "../../model/lifestyleType";
import TopMenu from "../../components/top-menu/top-menu";
import Footer from "../../components/footer/footer";

const MeatSubcategoriesPage = ({ match }) => {
  const [filter, setFilter] = useState("");
  const [subcategories] = React.useState([
    
    {
        id: "sausages, burgers & rissoles",
        name: "Sausages, Burgers & Rissoles",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "pork & ham",
        name: "Pork & Ham",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "chicken",
        name: "Chicken",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "special poultry & game",
        name: "Special Poultry & Game",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },

      {
        id: "beef & veel",
        name: "Beef & Veel",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "mince",
        name: "Mince",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
      {
        id: "lamb",
        name: "Lamb",
        hideFor: [
          LifestyleType.Kosher,
          LifestyleType.Vegan,
          LifestyleType.Vegetarian,
          LifestyleType.Calcium
        ]
      },
  ]);

  const showCatagory = subcategory => {
    const searchFilter = JSON.parse(match.params.filter);
 
    var items = searchFilter.lifestyle.filter(val =>
        subcategory.hideFor.includes(val)
    );

    return items.length === 0;
  };
  
  return (
    
    <Layout title="Browse Categories" isHeaderSticky={false}>
      
      {/*<TopMenu /> */}

      <ListGroup>
        {subcategories.map(
          subcategory =>
          subcategory.name &&
            showCatagory(subcategory) && (
              <ListGroupItem key={subcategory.id}>
                <Link
                  className={styles.link}
                  to={`/products/${subcategory.id}?filter=${match.params.filter}`}
                >
                  {subcategory.name}
                  <FaAngleRight size={20} />
                </Link>
              </ListGroupItem>
            )
        )}
      </ListGroup>
      <Footer />
    </Layout>
    
  );
};

export default MeatSubcategoriesPage;
