import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { missionReducer, getMissionsMiddleware, updateMissionStateMiddleware } from './missions/missions';

const rootReducer = combineReducers({
    missions: missiosReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
