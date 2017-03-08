/* ==========================================================================
 * ./src/shared/components/project.js
 *
 * Specific project Page
 * ========================================================================== */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Error404 from 'src/shared/components/404';

import * as projectActions from 'src/shared/actions/project';

import { updateHelmetProps } from 'config/helmet';

const WEBSITE_URL = 'http://jasonsuzheng.com/projects';

class project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fileName } = this.props;
    this.props.fetchproject(fileName);
  }

  componentWillReceiveProps(nextProps) {
    const { router } = nextProps;
    const { fileName } = this.props;
    if (fileName && router.params.projectId !== fileName.projectId) {
      this.props.fetchproject(router.params);
    }
  }

  render() {
    const { markdown, url, summary } = this.props;

    if (markdown && markdown.match(/^\<Not Found\>$/)) {
      return <Error404 />;
    } else if (!markdown) {
      const helmetProps = updateHelmetProps(
        url,
        'project | Jason Zheng',
        'project is loading...'
      );

      return (
        <div>
          <Helmet { ...helmetProps } />
          <div className="page page--project"></div>
        </div>
      );
    }

    const title = markdown.split('\n', 2)[0].substring(2);
    const helmetProps = updateHelmetProps(
      url,
      `${ title } | Jason Zheng`,
      summary
    );

    return (
      <div>
        <Helmet { ...helmetProps } />
        <div className="page page--project">
          <ReactMarkdown source={ markdown } />
          <div className="nav-links">
            <Link to={'/projects'} className="inline">projects</Link>
            <div className="inline">|</div>
            <Link to={'/'} className="inline">Home</Link>
          </div>
        </div>
      </div>
    );
  }
}

project.propTypes = {
  fetchproject: PropTypes.func,
  isFetching: PropTypes.bool,
  router: PropTypes.object,
  blubr: PropTypes.object,
  fileName: PropTypes.object,
  markdown: PropTypes.string,
  summary: PropTypes.string,
  url: PropTypes.string
};

project.need = [
  projectActions.fetchproject
];

function mapStateToProps(state) {
  const { project, router } = state;

  if (_.size(project.cache) > 0) {
    let projectId;
    if (project.currentproject) {
      projectId = project.currentproject;
    } else {
      projectId = router.params.projectId;
    }

    const cacheHit = project.cache[projectId];
    if (cacheHit) {
      return {
        url: `${ WEBSITE_URL }/${ cacheHit.fileName.projectId }`,
        isFetching: cacheHit.isFetching,
        markdown: cacheHit.markdown,
        fileName: cacheHit.fileName,
        summary: cacheHit.summary,
        router
      };
    }
  }

  return {
    isFetching: true,
    markdown: null,
    fileName: router.params,
    router
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(projectActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(project);
