/* ==========================================================================
 * ./src/server/router/project.js
 *
 * /api/project/:fileName
 * ========================================================================== */

import tracer from 'tracer';

import colorifyCode from 'utils/colorifyCode';

import possibleprojects from 'static/projects/index.json';

const logger = tracer.colorConsole();

const notFoundTag = '<Not Found>';

export function getproject(req, res) {
  let notFound = true
  for (let i = 0; i < possibleprojects.length; i += 1) {
    const project = possibleprojects[i];
    if (project.file.indexOf(req.params.fileName) >= 0) {
      notFound = false;
    }
  }

  if (notFound) {
    return res.json({
      project: notFoundTag
    });
  }

  colorifyCode(req.params.fileName).then((md) => {
    res.json({
      project: md
    });
  }).catch((err) => {
    logger.error(err);
    res.json({
      project: notFoundTag
    });
  });
};
