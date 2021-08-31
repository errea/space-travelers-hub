import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  const rocketsList = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rocketsList.length === 0) {
      dispatch(getRockets());
    }
  }, []);

  return (
    <ul>
      {rocketsList.map((rocket) => <p key={rocket.id}>{rocket.name}</p>)}
    </ul>
  );
};

export default Rockets;
