import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rocketsList = useSelector((state) => state.rockets);
  const reservedRockets = rocketsList.filter((rocket) => rocket.reserved);

  return (
    <div className="profile-container">
      <div className="reserved">
        <h2>My Missions</h2>
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
