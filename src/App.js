import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "./pages/home/home";
import CategoriesPage from "./pages/categories";
import ProductsPage from "./pages/products";
import ProductDetailsPage from "./pages/product-details";
import ShoppingListPage from "./pages/shopping-list";
import TermsOfUsePage from "./pages/terms-of-use";
import PrivacyPolicyPage from "./pages/privacy-policy";
import AboutPage from "./pages/about";
import FruitSubcategoriesPage from "./pages/subcategories/fruitSubcategories";
import MeatSubcategoriesPage from  "./pages/subcategories/meatSubcategories";
import ReactGA from "react-ga";
import "./App.css";
import Profile from "./pages/profile";

function App({ history }) {
  React.useEffect(() => {
    if (process.env.REACT_APP_GA_TRACKING_ID) {
      ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
      ReactGA.set({ page: window.location.pathname + window.location.search });
      ReactGA.pageview(window.location.pathname + window.location.search);
    }

    history.listen(location => {
      if (process.env.REACT_APP_GA_TRACKING_ID) {
        ReactGA.set({ page: location.pathname });
        ReactGA.pageview(location.pathname);
      }
    });

  }, [history]);

  return (
    <Switch>
      <Route exact={true} path="/" component={HomePage} />
      <Route path="/categories/:filter" component={CategoriesPage} />

      <Route path="/products/:categoryId?" component={ProductsPage} />
      <Route path="/products/:subcategoryId?" component={ProductsPage} />
      <Route
        path="/product-details/:productId?" component={ProductDetailsPage}
      />
      <Route path="/fruitSubcategories/:filter" component={FruitSubcategoriesPage} />
      <Route path="/meatSubcategories/:filter" component={MeatSubcategoriesPage} />




      <Route path="/profile" component={Profile} />
      <Route path="/terms-of-use" component={TermsOfUsePage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />

      <Route path="/shopping-list" component={ShoppingListPage} />
      <Route path="/about" component={AboutPage} />
{/** 
      <Admin
        dataProvider={dataProvider}
        customRoutes={[
            <Route
                key="my-profile"
                path="/my-profile"
                component={profile.edit}
            />
        ]}
        appLayout={MyLayout}
>
        <Resource name="posts" {...posts} />
        <Resource name="comments" {...comments} />
        <Resource name="tags" {...tags} />
        <Resource name="profile" />
    </Admin>
      */}
    </Switch>
  );
}

export default withRouter(App);
