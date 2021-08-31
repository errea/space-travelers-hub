const RocketItem = (prop) => {
  const { name, description, image } = prop;

  return (
    <li>
      <img src={image} alt="Rocket" />
      <div className="rocket-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </li>
  );
};

export default RocketItem;
