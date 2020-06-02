import React from "react";
import { ListGroup } from "reactstrap";
import queryString from "query-string";
import axios from "axios";
import Layout from "../components/layout/layout";
import ProductItem from "../components/product-item/product-item";
import Spinner from "./../components/spinner/spinner";


const ProductsPage = ({ location, match, history }) => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    if (!data) {
      const paramValues = queryString.parse(location.search);
      const filter = JSON.parse(paramValues.filter);

      axios
        .post(
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
  },[]);

  if (!data) {
    return <Spinner />;
  }

  return (
    <Layout
      title={`${match.params.categoryId} (${data.filteredCount} of ${data.totalCount})`}
      isHeaderSticky={true}
    >
      <ListGroup>
        {data.products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ListGroup>
    </Layout>
  );
};

export default ProductsPage;
