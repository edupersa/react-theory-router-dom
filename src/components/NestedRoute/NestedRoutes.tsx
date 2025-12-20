import { Link, Outlet } from "react-router-dom";
import styles from "./NestedRoutes.module.css";

const NestedRoutes = () => {
  console.log("Nested-Route rendered");
  const pathName = window.location.pathname;
  console.log("Current Pathname:", pathName);
  return (
    <>
      <h1>Nested Page</h1>
      <nav className={styles.nav}>
        <Link className={styles.link} to="nested-1"> Nest 1 </Link>
        <Link className={styles.link} to="nested-2"> Nest 2 </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NestedRoutes;
