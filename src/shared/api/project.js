/* ==========================================================================
 * ./src/shared/api/project.js
 *
 * project API
 * ========================================================================== */

export function getproject(fileName) {
  const file = `${ fileName }.md`;

  if (process.env.BROWSER) {
    const axios = require('axios');
    return axios.get(`/api/project/${ file }`);
  } else {
    const Promise = require('bluebird');
    const colorifyCode = require('utils/colorifyCode');
    const possibleprojects = require('static/projects/index.json');
    const notFoundTag = '<Not Found>';

    let notFound = true;
    for (let i = 0; i < possibleprojects.length; i += 1) {
      const project = possibleprojects[i];
      if (project.file.indexOf(file) >= 0) {
        notFound = false;
        break;
      }
    }

    if (notFound) {
      return new Promise((resolve) => {
        resolve(notFoundTag);
      });
    }

    return colorifyCode(file);
  }
}
