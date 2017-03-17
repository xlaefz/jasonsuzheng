/* ==========================================================================
 * ./src/shared/components/home.js
 *
 * Home Page
 * ========================================================================== */

import React, { Component } from 'react';
import { Link } from 'react-router';

import requireImage from 'utils/requireImage';

class Home extends Component {
  render() {
    return (
      <div className="page page--home">
        <div className="logo">
          <img src={ requireImage('logo.png').toString() } />
        </div>
        <div className="margin-bottom-4">
          <p className="h2 margin-bottom-4">
            Hey, I'm <b>Jason Zheng</b>,
          </p>
          <p className="h3 light lineheight-m">
            a <b>
              <a href="https://github.com/xlaefz" target="_blank">
                software engineer
              </a>
            </b> currently residing in Los Angeles.
            I am a student at <b>
              <a href="http://www.usc.edu/" target="_blank">
                  USC
              </a>
            </b> and currently working at Los Angeles Technical Consulting Hub.
          </p>
        </div>
        <div className="margin-bottom-4">
          <p className="h4 light margin-bottom-2">
            Welcome to my website, where I
            <b>
              <Link to={'/photos'}>
                &nbsp;blog
              </Link>
            </b> and track my growth as a developer through
            <b>
              <Link to={'/projects'}>
                &nbsp;projects
              </Link>
            </b>.
          </p>
          <p className="h4 light margin-bottom-2">
            I like to develop iOS apps that give back to the community.
          </p>
        </div>
        <div className="links">
          <div className="link">
            <a href="https://github.com/xlaefz" target="_blank">GitHub</a>
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/jason-zheng-88854592/" target="_blank">LinkedIn</a>
          </div>
          <div className="link">
            <Link to={'/message'}>Message</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
