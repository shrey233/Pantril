import React, { useState } from "react";
import { ListGroup, ListGroupItem, Container } from "reactstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Layout from "../../components/layout/layout";
import styles from "./../categories.module.css";
import { LifestyleType } from "../../model/lifestyleType";
import TopMenu from "../../components/top-menu/top-menu";
import Footer from "../../components/footer/footer";

const FruitSubcategoriesPage = ({ match }) => {
  const [filter, setFilter] = useState("");
  const [categories] = React.useState([
    
    {
        id: "fresh salad & stir fry",
        name: "Fresh Salad & Stiry Fry",
        hideFor: []
      },
      {
        id: "fresh fruit",
        name: "Fresh Fruit",
        hideFor: []
      },
      {
        id: "fresh veg",
        name: "Fresh Vegetables",
        hideFor: []
      },
      {
        id: "fresh herbs",
        name: "Fresh Herbs",
        hideFor: []
      },
  ]);

  const showCatagory = category => {
    const searchFilter = JSON.parse(match.params.filter);
 
    var items = searchFilter.lifestyle.filter(val =>
      category.hideFor.includes(val)
    );

    return items.length === 0;
  };
  
  return (
    
    <Layout title="Browse Categories" isHeaderSticky={false}>
      
      {/*<TopMenu /> */}

      <ListGroup>
        {categories.map(
          category =>
            category.name &&
            showCatagory(category) && (
              <ListGroupItem key={category.id}>
                <Link
                  className={styles.link}
                  to={`/products/${category.id}?filter=${match.params.filter}`}
                >
                  {category.name}
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

export default FruitSubcategoriesPage;
