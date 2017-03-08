/* ==========================================================================
 * ./src/shared/components/app.js
 *
 * React/Redux App
 * ========================================================================== */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import GoogleAnalytics from 'react-g-analytics';

import Navigation from 'src/shared/components/navigation';
import Home from 'src/shared/components/home';

import * as projectsActions from 'src/shared/actions/projects';

import { HelmetBaseConfig } from 'config/helmet';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { projects } = this.props;
    if (projects.length <= 0) {
      this.props.fetchprojects();
    }
  }

  componentDidUpdate() {
    this.refs.scrollingContainer.scrollTop = 0;
  }

  render() {
    return (
      <div>
        <Helmet { ...HelmetBaseConfig } />
        <div className="container">
          <div className="nav">
            <Navigation />
          </div>
          <div ref="scrollingContainer" className="content">
            { !this.props.children && <Home /> }
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  projects: PropTypes.array,
  fetchprojects: PropTypes.func
};

App.need = [
  projectsActions.fetchprojects
];

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(projectsActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
