import { useDispatch, useSelector } from "react-redux";
import { loadrockets } from "../store/rockets";
import { useEffect } from "react";

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.list);

  
  useEffect(() => {
    dispatch(loadrockets());
  }, [dispatch]);

  return (
    <div>
      <h1>SPACEX Launches</h1>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            Flight Number: {rocket.flight_number} <br></br>
            Mission Name: {rocket.mission_name}
            <br></br>
            Launch Year: {rocket.launch_year}
            <br></br>
            Rocket Name: {rocket.rocket.rocket_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Rockets;
