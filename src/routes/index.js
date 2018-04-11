import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from '../containers/App';
import TicTacToe from '../containers/TicTacToe';
import Profile from '../containers/Profile';

const createRoutes = () => {
  return (

    <Route
      path={'/'}
      component={App}
    >
      <IndexRoute component={TicTacToe} />
      <Route path={'/profile'} component={Profile} />
    </Route>
  );
};

const Routes = createRoutes();
export default Routes;
