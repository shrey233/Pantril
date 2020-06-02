import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ListGroupItem, Button } from "reactstrap";
import SaveButton from "../save-button/save-button";
import { getUser } from "../../store/user/selector";
import { deleteProduct } from "../../store/shopping-list/actions";
import { formatCurrency } from "./../../utils/formatters";
import flag from "../../assets/australia-flag.png";
import styles from "./product-item.module.css";

const ProductItem = ({ product, deleteProduct, user, inShoppingList }) => {
  return (
    <ListGroupItem
      className={inShoppingList ? "d-flex justify-content-between" : ""}
    >
      <Link className={styles.product} to={`/product-details/${product.id}`}>
        <div className={styles.leftSide}>
          <div>
            <img
              className={styles.smallImageFile}
              src={product.smallImageFile}
              alt={product.name}
            />
          </div>
          <div className={styles.details}>
            <div
              className={styles.title}
              dangerouslySetInnerHTML={{ __html: product.name }}
            ></div>
            <div className={styles.price}>{formatCurrency(product.price)}</div>
          </div>
        </div>

        {product.countryOfOrigin === "Australia" && !inShoppingList && (
          <img
            src={flag}
            alt="Australian Made"
            title="Australian Made"
            height="30px"
          />
        )}
      </Link>

      {inShoppingList && (
        <Button
          outline
          color="danger"
          className="align-self-center"
          onClick={() => deleteProduct(product.id, user)}
        >
          Remove
        </Button>
      )}

      {!inShoppingList && (
        <div className={styles.actions}>
          <SaveButton product={product} />
        </div>
      )}
    </ListGroupItem>
  );
};

const mapStateToProps = state => {
  const { products } = state.shoppingList || {};

  return { products, user: getUser(state) };
};

export default connect(mapStateToProps, { deleteProduct })(ProductItem);
