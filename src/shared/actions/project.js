/* ==========================================================================
 * ./src/shared/actions/project.js
 *
 * project Actions
 * ========================================================================== */

import { getproject } from 'src/shared/api/project';

export const GET_project = 'GET_project';

export function fetchproject(params) {
  const fileName = params.projectId;
  const promise = getproject(fileName);

  return {
    type: GET_project,
    fileName,
    promise
  };
}
