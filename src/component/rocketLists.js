import { useDispatch, useSelector } from "react-redux";
import { loadrockets } from "../store/rockets";
import { useEffect } from "react";

const RocketLists = () => {
  const dispatch = useDispatch();
  const rocket = useSelector((state) => state.list);
  
  useEffect(() => {
    dispatch(loadrockets());
  }, [dispatch]);

  function Rockets(props){
    return (
      <div className="container mx-auto p-10 md:p-20 transform duration-500">
          <article className="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-xl ">
              <div className="p-10 my-auto">
              <ul className="">
              <img className="w-full md:w-40 h-auto mb-5" src={props.img} alt="" />
                <li className="">Flight Number: {props.flight_number}</li>
                <li className="">Mission Name: {props.mission_name} m.</li>
                <li className="">Launch Year: {props.launch_year} m.</li>
                <li className="">Rocket Name: {props.rocket_name} m.</li>
              </ul>
              </div>
          </article>
      </div>
    )
  }
  return (
    <div>
        {rocket.map((rocket) => {
          return(
            <Rockets key={rocket.id}
            flight_number={rocket.flight_number}
            mission_name={rocket.mission_name}
            img={rocket.links.mission_patch_small}
            launch_year={rocket.launch_year}
            rocket_name={rocket.rocket.rocket_name}
            />
          )

        }
        )
}
    </div>
  );
};


export default RocketLists;