/* ==========================================================================
 * ./src/shared/components/projects.js
 *
 * projects List Page
 * ========================================================================== */

import _ from 'lodash';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import moment from 'moment';

import { updateHelmetProps } from 'config/helmet';

const mdExtRegex = /\.md$/;
const preNumRegex = /^[0-9]*/;

class projects extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects } = this.props;

    const rows = [];
    _.forEach(projects, (project) => {
      const rowIndex = parseInt(project.file.match(preNumRegex), 10) - 1;
      const projectFileName = project.file.replace(mdExtRegex, '');
      rows[rowIndex] = (
        <Link key={ rowIndex } to={ `projects/${ projectFileName }` }>
          <div className="row">
            <h3 className="row--title bold">
              { project.title }
            </h3>
            <p className="row--desc">
              { project.description }
            </p>
            <p className="row--date light">
              { moment(project.date, 'MM/DD/YYYY').format('MMMM D, YYYY') }
            </p>
          </div>
        </Link>
      );
    });

    rows.reverse();

    const helmetProps = updateHelmetProps(
      'http://jasonsuzheng.com/projects',
      'Projects | Jason Zheng',
      'A collection of projects about almost anything! I\'ll be using projects as a way to write tutorials, rants, and blogs.'
    );

    return (
      <div>
        <Helmet { ...helmetProps } />
        <div className="page page--projects">
          <h1 className="title center">
            Projects
          </h1>
          <div className="rows">
            { rows }
          </div>
          <div className="nav-links">
            <Link to={'/photos'} className="inline">Photos</Link>
            <div className="inline">|</div>
            <Link to={'/'} className="inline">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

projects.propTypes = {
  projects: PropTypes.array
};

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(projects);
