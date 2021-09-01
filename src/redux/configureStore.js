import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missionsReducer from './missions/missions';

const rootReducer = combineReducers({
  rockets: rocketsReducer,
  missions: missionsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
