import React from 'react';
import {Route} from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home';
import Profile from '../components/Profile';

const Routes = () => {
  return (
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
    </App>
  );
};
export default Routes;
