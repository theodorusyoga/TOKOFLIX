import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import '../styles/Home.scss';

class Home extends Component {
  componentDidMount

  render() {
    return (
      <div className="home">
        <div className="mt-5">This is Home</div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
