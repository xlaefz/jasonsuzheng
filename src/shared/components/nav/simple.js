/* ==========================================================================
 * ./src/shared/components/nav/simple.js
 *
 * Simple Navigation
 * ========================================================================== */

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import moment from 'moment';

const mdExtRegex = /\.md$/;
const preNumRegex = /^[0-9]*/;

class SimpleNavigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { projects, className } = this.props;

    const projectsReversed = [];
    _.forEach(projects, (project) => {
      const rowIndex = parseInt(project.file.match(preNumRegex), 10) - 1;
      projectsReversed[rowIndex] = project;
    });
    projectsReversed.reverse();

    let prevYear = 0;
    const projectLinks = [];
    _.forEach(projectsReversed, (project, index) => {
      const projectFileName = project.file.replace(mdExtRegex, '');
      const projectDate = moment(project.date, 'MM/DD/YYYY');

      if (prevYear !== projectDate.year()) {
        prevYear = projectDate.year();
        projectLinks.push(
          <li key={ `projects-year-${ index }` } className="nav--projects-year">
            { projectDate.year() }
          </li>
        );
      }

      projectLinks.push(
        <li key={ `project-${ index }` } className="nav--projects">
          <Link to={ `/projects/${ projectFileName }` } className="nav--project">
            <span className="date">
              { projectDate.format('M/D: ') }
            </span>
            <span className="title">
              { project.title }
            </span>
          </Link>
        </li>
      );
    });

    return (
      <div className={ `simple-nav ${ className }` }>
        <ul className="outer">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
            <ul className="inner">
              { projectLinks }
            </ul>
          </li>
          <li>
            <Link to="/message">Message</Link>
          </li>
        </ul>
      </div>
    );
  }
}

SimpleNavigation.propTypes = {
  projects: PropTypes.array,
  className: PropTypes.string
};

export default SimpleNavigation;
