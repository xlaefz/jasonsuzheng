/* ==========================================================================
 * ./src/routes.js
 *
 * App routes
 * ========================================================================== */

import React from 'react';
import { Route } from 'react-router';

import App from 'src/shared/components/app';
import HomePage from 'src/shared/components/home';
import PhotosPage from 'src/shared/components/photos';
import MessagePage from 'src/shared/components/message';
import MessageSentPage from 'src/shared/components/sent';
import projectsPage from 'src/shared/components/projects';
import projectPage from 'src/shared/components/project';
import Error404 from 'src/shared/components/404';

export default (
  <Route name="app" path="/" component={ App }>
    <Route path="home" component={ HomePage } />
    <Route path="photos" component={ PhotosPage } />
    <Route path="message" component={ MessagePage } />
    <Route path="message/sent" component={ MessageSentPage } />
    <Route path="projects" component={ projectsPage } />
    <Route path="projects/:projectId" component={ projectPage } />
    <Route path="*" component={ Error404 } />
  </Route>
);
