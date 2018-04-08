import React from 'react';
import {Route} from 'react-router-dom';
import App from '../containers/App';
import Home from '../containers/Home';
import Profile from '../containers/Profile';

const Routes = () => {
  return (
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
    </App>
  );
};
export default Routes;
