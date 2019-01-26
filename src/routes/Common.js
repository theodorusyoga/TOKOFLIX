import React from 'react';
import { Switch } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import BaseRoute from '../components/BaseRoute';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

class AppRouter extends React.Component {
  componentDidMount

  render() {
    return (
      <Switch>
        <React.Fragment>
          <BaseRoute exact path="/" layout={MainLayout} component={Home} />
          <BaseRoute path="/:movie_id" layout={MainLayout} component={Detail} />
        </React.Fragment>
      </Switch>
    );
  }
}

export default AppRouter;
