import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rockets';
import RocketItem from './RocketItem';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketsList = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <ul className="rockets-list">
      {rocketsList.map((rocket) => (
        <RocketItem
          key={rocket.id}
          name={rocket.name}
          type={rocket.type}
          image={rocket.flickr_images}
        />
      ))}
    </ul>
  );
};

export default Rockets;
