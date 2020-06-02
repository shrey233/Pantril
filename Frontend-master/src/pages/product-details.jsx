import React from "react";
import Layout from "../components/layout/layout";
import Section from "../components/section/section";
import SaveButton from "../components/save-button/save-button";
import axios from "axios";
import styles from "./product-details.module.css";
import Spinner from "./../components/spinner/spinner";
import { formatCurrency } from "./../utils/formatters";
import flag from "../assets/australia-flag.png";

const ProductDetailsPage = ({ match }) => {
  const [product, setProduct] = React.useState(null);

  React.useEffect(() => {
    if (!product) {
      axios
        .get(
          `${process.env.REACT_APP_API_URL}/product/${match.params.productId}`
        )
        .then(res => {
          setProduct(res.data);
        })
        .catch(() => {
          // history.push({
          //   pathname: "/error"
          // });
        });
    }
  });

  if (!product) {
    return <Spinner />;
  }

  return (
    <Layout title="Product Details" isHeaderSticky={true}>
      <div className={styles.header}>
        <div className="text-center">
          <img
            className={styles.image}
            src={product.largeImageFile}
            alt={product.name}
          />
        </div>
        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: product.name }}
        ></h1>

        <div className={styles.price}>{formatCurrency(product.price)}</div>
        {product.countryOfOrigin === "Australia" && (
          <img
            src={flag}
            alt="Australian Made"
            title="Australian Made"
            height="30px"
          />
        )}

        <div className={styles.action}>
          <SaveButton product={product} />
        </div>
      </div>

      <Section title="Product Details">
        <div dangerouslySetInnerHTML={{ __html: product.description }}></div>
      </Section>
      <Section title="Allergen">
        {product.allergenContains.map((allergen, i) => [
          i > 0 && ", ",
          allergen
        ])}
      </Section>
      {product.allergenMayBePresent &&
        product.allergenMayBePresent.length > 0 && (
          <Section title="May Contain">
            {product.allergenMayBePresent.map((allergen, i) => [
              i > 0 && ", ",
              allergen
            ])}
          </Section>
        )}
      <Section title="Ingredients">{product.ingredients}</Section>
    </Layout>
  );
};

export default ProductDetailsPage;
