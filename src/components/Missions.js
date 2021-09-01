import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions, joinMissions, leaveMissions } from '../redux/missions/missions';
import MissionsItem from './MissionsItem';
import './Missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missions);

  const joinMissionHandler = (id) => {
    dispatch(joinMissions(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMissions(id));
  };

  useEffect(() => {
    if (missionData.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Descriptions</th>
          <th>Status</th>
          <th>{String.fromCharCode(8194)}</th>
        </tr>
      </thead>
      <tbody>
        {missionData.map((data) => (
          <MissionsItem
            key={data.mission_id}
            joinMissionHandler={joinMissionHandler}
            leaveMissionHandler={leaveMissionHandler}
            id={data.mission_id}
            name={data.mission_name}
            description={data.description}
            join={data.join}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Mission;
