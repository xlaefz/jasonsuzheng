/* ==========================================================================
 * ./src/shared/components/navigation.js
 *
 * Site Navigation
 * ========================================================================== */

import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SimpleNavigation from 'src/shared/components/nav/simple';
import TerminalNavigation from 'src/shared/components/nav/terminal';

import * as NavigationActions from 'src/shared/actions/navigation';

const NAV_TOP = 'nav-top';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.toggleTerminal();
  }

  render() {
    const { projects, navigation } = this.props;
    const isTerm = navigation.terminal;
    const showIcon = navigation.launcher;

    return (
      <div className="navs-container">
        <SimpleNavigation
          projects={ projects }
          className={ `no-select ${ !isTerm ? NAV_TOP : '' }` }
        />
        <TerminalNavigation
          projects={ projects }
          closeTerminal={ this.props.toggleTerminal }
          className={
            `no-select ${isTerm ? NAV_TOP : ''} ${ !showIcon ? 'hide' : '' }`
          }
          key="terminal"
        />
        <div
          className={
            `no-select launcher-icon ${ !isTerm && showIcon ? NAV_TOP : '' }`
          }
          onClick={ this.props.toggleTerminal }
        >
          <div className="menu-bar"></div>
          <div className="greater">&gt;</div>
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  projects: PropTypes.array,
  navigation: PropTypes.object,
  toggleTerminal: PropTypes.func
};

function mapStateToProps(state) {
  const { projects, navigation } = state;
  return {
    projects,
    navigation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NavigationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
