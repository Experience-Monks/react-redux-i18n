import React, { lazy, Suspense } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = React.memo(({ location, ...props }) => {
  return (
    <main className="App" role="main">
      <Suspense fallback={<div>Loading...</div>}>
        <Switch location={location}>
          <Route exact path="/" render={() => <Home />} />
          <Route render={() => <NotFound />} />
        </Switch>
      </Suspense>
    </main>
  );
});

export default withRouter(App);
