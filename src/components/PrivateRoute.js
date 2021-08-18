import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext.jsx';

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
      <Route
      {...rest}
      render={(props) => (currentUser ? <Component {...props}/> : <Redirect to='/login'/>)}
      ></Route>
  );
}
