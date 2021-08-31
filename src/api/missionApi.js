const missionApi = {
    getRockets() {
      const missions = fetch('https://api.spacexdata.com/v3/missions')
        .then((rawResponseData) => rawResponseData.json())
        .then((response) => response);
  
      return missions;
    },
  };
  
  export default missionApi;