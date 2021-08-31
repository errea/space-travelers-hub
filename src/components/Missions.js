import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
  const missionData = useSelector((state) => state.missions);
  useEffect(() => {
    if (missionData.length === 0) {
      dispatch(getMissions());
    }
  }, []);

  return (
    <div>
      {missionData.map((data) => (
        <div key={data.mission_id}>
          <div>{data.mission_name}</div>
          <div>{data.description}</div>
          <div><div>{data.mission_status ? 'Active Member' : 'NOT A MEMBER'}</div></div>
        </div>
      ))}
    </div>
  );
};

export default Mission;
