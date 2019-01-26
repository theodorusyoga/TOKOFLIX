import React from 'react';
import { Switch } from 'react-router-dom';
import BaseRoute from '../components/BaseRoute';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

class AppRouter extends React.Component {
  componentDidMount

  render() {
    return (
      <Switch>
        <BaseRoute exact path="/" layout={MainLayout} component={Home} />
        <BaseRoute exact path="/:movie_id" layout={MainLayout} component={Detail} />
      </Switch>
    );
  }
}

export default AppRouter;
