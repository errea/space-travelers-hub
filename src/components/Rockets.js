import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets, reserveRocket, cancelReservation } from '../redux/rockets/rockets';
import RocketItem from './RocketItem';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketsList = useSelector((state) => state.rockets);

  const reserveRocketHandler = (id) => {
    dispatch(reserveRocket(id));
  };

  const cancelReservationHandler = (id) => {
    dispatch(cancelReservation(id));
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
          cancelReservationHandler={cancelReservationHandler}
          id={rocket.id}
          name={rocket.name}
          description={rocket.description}
          image={rocket.flickr_images}
          reserved={rocket.reserved}
        />
      ))}
    </ul>
  );
};

export default Rockets;
