import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AppLayout from "layouts/app-layout";
import AuthLayout from "../layouts/auth-layout";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "configs/AppConfig";
function RouteInterceptor({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: AUTH_PREFIX_PATH,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export const Views = (props) => {
  const { token } = props;

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to={APP_PREFIX_PATH} />
      </Route>
      <Route path={AUTH_PREFIX_PATH}>
        <AuthLayout />
      </Route>
      <Route path={APP_PREFIX_PATH}>
        <AppLayout />
      </Route>
      {/* <RouteInterceptor path={APP_PREFIX_PATH} isAuthenticated={token}>
        <AppLayout />
      </RouteInterceptor> */}
    </Switch>
  );
};

const mapStateToProps = ({ auth }) => {
  const { token } = auth;
  return { token };
};

export default withRouter(connect(mapStateToProps)(Views));
