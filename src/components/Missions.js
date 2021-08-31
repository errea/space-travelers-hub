import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';
import MissionsItem from './MissionsItem';
import './Missions.css';

const Mission = () => {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missions);
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
            id={data.mission_id}
            name={data.mission_name}
            description={data.description}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Mission;
