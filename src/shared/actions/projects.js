/* ==========================================================================
 * ./src/shared/actions/projects.js
 *
 * projects Actions
 * ========================================================================== */

import { getprojects } from 'src/shared/api/projects';

export const GET_projectS = 'GET_projectS';

export function fetchprojects() {
  const promise = getprojects();

  return {
    type: GET_projectS,
    promise
  };
}
