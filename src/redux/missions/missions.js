import spaceXAPI from '../../api/spaceXAPI';

const UPDATE_ALL = 'redux/mission/UPDATE_ALL';

const initialState = [];

const getInfo = (payload) => ({
  type: UPDATE_ALL,
  payload,
});

// -------------- Reducer ----------------------------

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALL:
      return action.payload;
    default:
      return state;
  }
};

export const getMissions = () => (dispatch) => {
  spaceXAPI.getMissions().then((response) => {
    dispatch(getInfo(
      response.map((mission) => ({
        mission_id: mission.mission_id,
        mission_name: mission.mission_name,
        description: mission.description,
      })),

    ));
  });
};

export default missionsReducer;
