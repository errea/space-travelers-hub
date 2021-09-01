const RocketItem = (prop) => {
  const {
    reserveRocketHandler,
    cancelReservationHandler,
    id,
    name,
    description,
    image,
  } = prop;

  return (
    <li>
      <img src={image} alt="Rocket" />
      <div className="rocket-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button" onClick={() => reserveRocketHandler(id)}>
          Reserve Rocket
        </button>
        <button type="button" onClick={() => cancelReservationHandler(id)}>
          Cancel Reservation
        </button>
      </div>
    </li>
  );
};

export default RocketItem;
