import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import Layout from "../components/layout/layout";
import styles from "./categories.module.css";
import { LifestyleType } from "./../model/lifestyleType";

const CategoriesPage = ({ match }) => {
  const [categories] = React.useState([
    {
      id: "fruit & vegetables",
      name: "Fruit & Vegetables",
      hideFor: []
    },
    {
      id: "meat",
      name: "Meat",
      hideFor: [
        LifestyleType.Kosher,
        LifestyleType.Vegan,
        LifestyleType.Vegetarian,
        LifestyleType.Calcium
      ]
    },
    {
      id: "seafood",
      name: "Seafood",
      hideFor: [
        LifestyleType.Vegan,
        LifestyleType.Vegetarian,
        LifestyleType.Calcium,
        LifestyleType.Organic
      ]
    },
    {
      id: "biscuits & snacks",
      name: "Biscuits & Snacks",
      hideFor: []
    },
    {
      id: "health foods",
      name: "Health Foods",
      hideFor: []
    },
    {
      id: "condiments",
      name: "Condiments",
      hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
    },
    {
      id: "international food",
      name: "International Food",
      hideFor: []
    },
    {
      id: "rice, noodles & pasta",
      name: "Rice, Noodles & Pasta",
      hideFor: [
        LifestyleType.Kosher,
        LifestyleType.Niacin,
        LifestyleType.Iron,
        LifestyleType.Calcium
      ]
    },
    {
      id: "baking",
      name: "Baking",
      hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
    },

    {
      id: "frozen food",
      name: "Frozen food",
      hideFor: []
    },
    {
      id: "canned & packet food",
      name: "Canned & Packet Food",
      hideFor: []
    },

    {
      id: "breakfast foods",
      name: "Breakfast Foods",
      hideFor: []
    },

    {
      id: "dairy",
      name: "Dairy",
      hideFor: []
    },
    {
      id: "cooking, seasoning & gravy",
      name: "Cooking, Seasoning & Gravy",
      hideFor: []
    },
    {
      id: "bakery",
      name: "Bakery",
      hideFor: []
    },

    {
      id: "chilled",
      name: "Chilled",
      hideFor: []
    },
    {
      id: "serviced deli",
      name: "Serviced Deli",
      hideFor: [LifestyleType.Niacin, LifestyleType.Iron]
    },
    {
      id: "jams & spreads",
      name: "Jams & Spreads",
      hideFor: []
    },
    {
      id: "confectionery",
      name: "Confectionery",
      hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin]
    },
    {
      id: "desserts",
      name: "Desserts",
      hideFor: [LifestyleType.Thiamin, LifestyleType.Niacin, LifestyleType.Iron]
    },
    {
      id: "drinks",
      name: "Drinks",
      hideFor: []
    }
  ]);

  const showCatagory = category => {
    const searchFilter = JSON.parse(match.params.filter);
 
    var items = searchFilter.lifestyle.filter(val =>
      category.hideFor.includes(val)
    );

    return items.length === 0;
  };

  return (
    <Layout title="Browse Categories" isHeaderSticky={true}>
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
    </Layout>
  );
};

export default CategoriesPage;
