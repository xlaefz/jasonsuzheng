/* ==========================================================================
 * ./src/shared/api/projects.js
 *
 * projects API
 * ========================================================================== */

export function getprojects() {
  if (process.env.BROWSER) {
    const axios = require('axios');
    return axios.get('/api/projects');
  } else {
    const Promise = require('bluebird');
    return new Promise((resolve) => {
      resolve(require('../../../static/projects/index.json'));
    });
  }
}
