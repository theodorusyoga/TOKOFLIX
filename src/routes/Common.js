import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

import Home from '../pages/Home';
import Detail from '../pages/Detail';

class AppRouter extends React.Component {
  componentDidMount

  render() {
    return (
      <Router>
        <React.Fragment>
          <MainLayout />
          <Route exact path="/" component={Home} />
          <Route path="/:movie_id" component={Detail} />
        </React.Fragment>
      </Router>
    );
  }
}

export default AppRouter;
