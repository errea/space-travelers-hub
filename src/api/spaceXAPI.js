const spaceXAPI = {
  getRockets() {
    const rockets = fetch('https://api.spacexdata.com/v3/rockets')
      .then((rawResponse) => rawResponse.json())
      .then((response) => response);

    return rockets;
  },

  getMissions() {
    const missions = fetch('https://api.spacexdata.com/v3/missions')
      .then((rawResponse) => rawResponse.json())
      .then((response) => response);

    return missions;
  },
};

export default spaceXAPI;
