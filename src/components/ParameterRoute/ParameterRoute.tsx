import { Link, Outlet, useParams } from "react-router-dom";

function generateRandomId() {
  return Math.random().toString(36).substring(7);
}

const ParameterRoute = () => {
  const randomId_1 = generateRandomId();
  const randomId_2 = generateRandomId();

  const { randomId } = useParams();

  console.log("ParameterRoute component rendered with id:", randomId);

  return (
    <>
      <h1>Parameter Route Page</h1>
      {!randomId && <p> Notice that right now the parameter is NOT passed in the URL and received by the child component until the user navigates to a specific route.</p>}
      {randomId && <p>The parameter is now passed.</p>}
      <Link to={`/parameter-routes/${randomId_1}`}>
        Go to Parameter Route with id: {randomId_1}
      </Link>
      <br />
      <Link to={`/parameter-routes/${randomId_2}`}>
        Go to Parameter Route with id: {randomId_2}
      </Link>
      <Outlet />
    </>
  );
};

export default ParameterRoute;
