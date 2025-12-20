import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./QueryParameters.module.css";

const QueryParameters = () => {

  console.log("Query Parameters - component rendered");
  console.log("URL ->", useLocation().pathname);

  return (
    <>
      <h1>Query Parameters Component</h1>
      <nav className={styles.nav}>
        <Link className={styles.link} to="?name=John"> name (John) Parameter </Link>
        <Link className={styles.link} to="?age=30"> age (30) Parameter </Link>
        <Link className={styles.link} to="?name=John&age=30">  name & age Parameters </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default QueryParameters;
