/* ==========================================================================
 * ./src/shared/reducers/project.js
 *
 * project Reducer
 * ========================================================================== */

import objectAssign from 'object-assign';

import { GET_project } from 'src/shared/actions/project';

const defaultprojectState = {
  cache: {}
};

const SUMMARY_REGEX = /\<\!\-\-\-[\s\S]*\-\-\>/;

function getSummary(markdown) {
  if (markdown === '<Not Found>') {
    return '';
  }

  const rawSummary = markdown.match(SUMMARY_REGEX)[0].split(/\r?\n/);
  return rawSummary.slice(1, -1).join(' ');
}

export default function project(state = defaultprojectState, action) {
  switch (action.type) {
    case GET_project:
      const newState = objectAssign({}, state);
      const isFetching = false;
      const fileName = {
        projectId: action.fileName
      };

      let markdown = '';
      if (action.res.data) {
        markdown = action.res.data.project;
      } else {
        markdown = action.res;
      }

      const summary = getSummary(markdown);

      newState.cache[fileName.projectId] = {
        isFetching,
        markdown,
        fileName,
        summary
      };
      newState.currentproject = action.fileName;
      return newState;

    default:
      return state;
  }
}
