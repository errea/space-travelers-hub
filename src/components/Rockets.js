import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRockets());
  });

  return (
    <h1>Space Travelers Hub</h1>
  );
};

export default Rockets;
