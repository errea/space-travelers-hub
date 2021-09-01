const MissionsItem = (prop) => {
  const {
    joinMissionHandler, id, name, description, join, leaveMissionHandler,
  } = prop;

  let button;
  if (!join) {
    button = <button type="button" onClick={() => joinMissionHandler(id)}>Join Mission</button>;
  } else {
    button = <button type="button" className="mission-button-join" onClick={() => leaveMissionHandler(id)}>Leave Mission</button>;
  }

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

        <p>
          {join && (<span className="join-badge">Join Mission</span>)}
          {description}
        </p>
        {button}
        {/* <button className="mission-button-join"
        type="button" onClick={() => joinMissionHandler(id)}>
          Join Mission
        </button>
        <button className="mission-button-join"
        type="button" onClick={() => leaveMissionHandler(id)}>
          Leave Mission
        </button> */}
      </td>
    </tr>

  );
};

export default MissionsItem;
