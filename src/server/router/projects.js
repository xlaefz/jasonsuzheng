/* ==========================================================================
 * ./src/server/router/projects.js
 *
 * /api/projects
 * ========================================================================== */

export function getprojects(req, res) {
  res.json(require('static/projects/index.json'));
};
