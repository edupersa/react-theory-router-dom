import { useParams } from "react-router-dom";

const ParameterRoute = () => {

  const { randomId } = useParams();

  console.log("ParameterRouteRecieved component rendered with id:", randomId);

  return (
    <>
      <h2>Parameter Route Recieved - id: {randomId}</h2>
    </>
  );
};

export default ParameterRoute;
