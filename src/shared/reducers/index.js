/* ==========================================================================
 * ./src/reducers/index.js
 *
 * Root Reducer
 * ========================================================================== */

import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import navigationReducer from 'src/shared/reducers/navigation';
import terminalReducer from 'src/shared/reducers/terminal';
import messageReducer from 'src/shared/reducers/message';
import projectsReducer from 'src/shared/reducers/projects';
import projectReducer from 'src/shared/reducers/project';

const rootReducer = combineReducers({
  router: routerStateReducer,
  navigation: navigationReducer,
  terminal: terminalReducer,
  message: messageReducer,
  projects: projectsReducer,
  project: projectReducer
});

export default rootReducer;
