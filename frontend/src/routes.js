import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import { AuthContext } from './components/Context/AuthContext';

function PrivateRouter({ isPrivate, ...rest }) {
  const { loading, authenticated } = useContext(AuthContext);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (isPrivate && !authenticated) {
    return <Redirect to="/sign-in" />;
  }

  return <Route {...rest} />;
}

function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sign-up" component={SignUp} />
      <Route path="/sign-in" component={SignIn} />
      <PrivateRouter isPrivate path="/auth/animals" />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
