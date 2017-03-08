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
            </b>
            &nbsp;born and raised in <b>
              Southern California
            </b> currently residing in Los Angeles.
            <b>
              <a href="http://www.usc.edu/" target="_blank">
                USC
              </a>
            </b>.
          </p>
        </div>
        <div className="margin-bottom-4">
          <p className="h4 light margin-bottom-2">
            Welcome to my website,where I
            <b>
              <Link to={'/photos'}>
                &nbsp;blog
              </Link>
            </b>, where I showcase my
            <b>
              <Link to={'/projects'}>
                &nbsp;Projects
              </Link>
            </b> about anything, a place that I use to practice my web
            development, and at the end of the day, a place about me.
            So a little about me...
          </p>
          <p className="h4 light margin-bottom-2">
            I spend alot of my time weigt lifting and looking at cool app designs.
            I personally don't do alot of design work; however, I really appreciate
             it and think it's pretty cool.
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
