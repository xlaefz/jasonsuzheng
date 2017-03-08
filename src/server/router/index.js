/* ==========================================================================
 * ./src/server/router/index.js
 *
 * API Router
 * ========================================================================== */

import { getproject } from 'src/server/router/project';
import { getprojects } from 'src/server/router/projects';
import { getFile } from 'src/server/router/cat';
import { sendMessage } from 'src/server/router/message';

export default (router) => {
  router.get('/projects', getprojects);
  router.get('/project/:fileName', getproject);
  router.get('/cat/:componentType', getFile);

  router.post('/message', sendMessage);

  return router;
};
