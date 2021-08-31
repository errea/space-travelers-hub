import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import { missionsReducer, getMissionsMiddleware, updateMissionStateMiddleware } from './missions/missions';

const rootReducer = combineReducers({
  missionsReducer,
});

const composedEnhancer = compose(
  applyMiddleware(getMissionsMiddleware),
  applyMiddleware(updateMissionStateMiddleware),
  applyMiddleware(logger),
);

const store = createStore(rootReducer, composedEnhancer);

export default store;
