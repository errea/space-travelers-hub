import spaceXAPI from '../../api/spaceXAPI';

const GET_ROCKETS = 'spacex/rockets/GET_ROCKETS';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    default:
      return state;
  }
};

const getRocketsAction = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

export const getRockets = () => (dispatch) => {
  spaceXAPI.getRockets().then((res) => {
    dispatch(getRocketsAction(res));
  });
};

export default rocketsReducer;
