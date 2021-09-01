const RocketItem = (prop) => {
  const {
    reserveRocketHandler,
    cancelReservationHandler,
    id,
    name,
    description,
    image,
    reserved,
  } = prop;

  let button;
  if (!reserved) {
    button = <button type="button" onClick={() => reserveRocketHandler(id)}>Reserve Rocket</button>;
  } else {
    button = <button type="button" className="cancel-btn" onClick={() => cancelReservationHandler(id)}>Cancel Reservation</button>;
  }

  return (
    <li>
      <img src={image} alt="Rocket" />
      <div className="rocket-info">
        <h2>{name}</h2>
        <p>
          {reserved && (<span className="reserved-badge">Reserved</span>)}
          {description}
        </p>
        {button}
      </div>
    </li>
  );
};

export default RocketItem;
