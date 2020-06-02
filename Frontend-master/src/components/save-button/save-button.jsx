import React from "react";
import { connect } from "react-redux";
import { FaCheck } from "react-icons/fa";
import { addProduct } from "../../store/shopping-list/actions";
import { Button } from "reactstrap";
import { getUser } from "../../store/user/selector";

const SaveButton = ({ product, addProduct, products, user }) => {
  const savedToList = () => products.some(p => p.id === product.id);

  return (
    <Button
      disabled={savedToList()}
      color="info"
      onClick={() => addProduct(product, user)}
    >
      {savedToList() ? (
        <>
          <FaCheck /> Saved to List{" "}
        </>
      ) : (
        "Add to Shopping List"
      )}
    </Button>
  );
};

const mapStateToProps = state => {
  const { products } = state.shoppingList || {};

  return { products, user: getUser(state) };
};

export default connect(mapStateToProps, { addProduct })(SaveButton);
