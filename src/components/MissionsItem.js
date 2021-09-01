const MissionsItem = (prop) => {
  const {
    joinMissionHandler, id, name, description, leaveMissionHandler,
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
        <button className="mission-button-join" type="button" onClick={() => leaveMissionHandler(id)}>
          Leave Mission
        </button>
      </td>
    </tr>

  );
};

export default MissionsItem;
