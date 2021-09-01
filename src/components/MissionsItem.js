const MissionsItem = (prop) => {
  const {
    joinMissionHandler, id, name, description,
  } = prop;

  return (

    <tr>
      <td className="mission-title">{name}</td>
      <td className="mission-description">{description}</td>
      <td>
        <span className="mission-button">
          Not a Member
        </span>
      </td>
      <td>
        <button className="mission-button-join" type="button" onClick={() => joinMissionHandler(id)}>
          Join Mission
        </button>
      </td>
    </tr>

  );
};

export default MissionsItem;
