import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket } from '../redux/rockets/rockets';
import RocketItem from './RocketItem';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketsList = useSelector((state) => state.rockets);

  const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

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
          reserveRocketHandler={reserveRocketHandler}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.flickr_images}
        />
      ))}
    </ul>
  );
};

export default Rockets;
