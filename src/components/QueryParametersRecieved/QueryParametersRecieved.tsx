import { useSearchParams } from "react-router-dom";


const QueryParametersRecieved = () => {

  const [searchParams] = useSearchParams();
  const name = searchParams.get("name");
  const age = searchParams.get("age");

  console.log("Query Parameters Recieved - component rendered with params:", { name, age });

  if (!name && !age) {
    return <h2>No query parameters provided IF.</h2>;
  }

  return (
    // <h2> Query Parameters Recieved Component: {name ? name : "No name provided"} and {age ? age : "No age provided"} </h2>
    <h2> Query Parameters Recieved - {name ? age ? `name: "${name}" and age: "${age}"` : `name: "${name}"` : age ? `age: "${age}"` : "No parameters provided Evaluated."} </h2>
  );
};

export default QueryParametersRecieved;