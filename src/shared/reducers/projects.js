/* ==========================================================================
 * ./src/shared/reducers/projects.js
 *
 * projects Reducer
 * ========================================================================== */

import { GET_projectS } from 'src/shared/actions/projects';

export default function projects(state = [], action) {
  switch (action.type) {
    case GET_projectS:
      if (action.res.data) {
        return action.res.data;
      }
      return action.res;

    default:
      return state;
  }
}
