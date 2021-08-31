const RocketItem = (prop) => {
  const { name, image } = prop;

  return (
    <li>
      <img src={image} alt="Rocket" />
      <div className="rocket-info">
        <h2>{name}</h2>
      </div>
    </li>
  );
};

export default RocketItem;
