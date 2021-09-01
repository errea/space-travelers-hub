import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const reservedRockets = rocketsList.filter((rocket) => rocket.reserved);
  const missionsList = useSelector((state) => state.missions);
  const reservedMissions = missionsList.filter((mission) => mission.reserved);

  return (
    <div className="profile-container">
      <div className="reserved">
        <h2>My Missions</h2>
        <ul>
          {reservedMissions.map((mission) => (
            <li key={mission.mission_id}>{mission.mission_name}</li>
          ))}
        </ul>
      </div>
      <div className="reserved">
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
