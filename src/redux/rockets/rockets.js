import spaceXAPI from '../../api/spaceXAPI';

const GET_ROCKETS = 'spaceX/rockets/GET_ROCKETS';

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
    dispatch(getRocketsAction(
      res.map((rocket) => ({
        id: rocket.id,
        name: rocket.rocket_name,
        description: rocket.description,
        flickr_images: rocket.flickr_images[0],
      })),
    ));
  });
};

export default rocketsReducer;
