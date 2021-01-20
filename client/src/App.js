import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { checkUserSession } from "./redux/actions/user";
import { selectCurrentUser } from "./redux/selectors/user";

import { GlobalStyle } from "./global.styles";
import Header from "./components/header";
import Spinner from "./components/spinner";
import ErrorBoundary from "./components/error-boundary";

const HomePage = lazy(() => import("./pages/homepage"));
const ShopPage = lazy(() => import("./pages/shop"));
const CheckoutPage = lazy(() => import("./pages/checkout"));
const LoginPage = lazy(() => import("./pages/login"));

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/login"
              render={() => (currentUser ? <Redirect to="." /> : <LoginPage />)}
            />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
