import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { APP_PREFIX_PATH } from "../../configs/AppConfig";
import Loading from "components/Shared-Components/Loading";
export const AppViews = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>

        <Route
          path={`${APP_PREFIX_PATH}`}
          component={lazy(() => import(`./Home`))}
        />

      </Switch>
    </Suspense>
  );
};

export default AppViews;
