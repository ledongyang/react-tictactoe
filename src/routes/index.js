import React from 'react';
import {Route} from 'react-router-dom';
import App from '../containers/App';
import TicTacToe from '../containers/TicTacToe';
import Profile from '../containers/Profile';

const Routes = () => {
  return (
    <App>
      <Route exact path='/' component={TicTacToe} />
      <Route path='/profile' component={Profile} />
    </App>
  );
};
export default Routes;
