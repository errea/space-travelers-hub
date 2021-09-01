import { useSelector } from 'react-redux';
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets);

  return (
    <div className="profile-container">
      <div className="reserved">
        <h2>My Missions</h2>
      </div>
      <div className="reserved">
        <h2>My Rockets</h2>
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>{rocket.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
