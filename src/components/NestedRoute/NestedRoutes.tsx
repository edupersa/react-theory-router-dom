import { Link, Outlet, useLocation } from "react-router-dom";
import styles from "./NestedRoutes.module.css";

const NestedRoutes = () => {
  console.log("Nested-Route rendered");
  const pathName = useLocation().pathname;
  console.log("Current Pathname:", pathName);

  const nestedURL = pathName.includes("nested-1") || pathName.includes("nested-2");

  return (
    <>
      <h1>Nested Page</h1>
      {!nestedURL && <p>Notice that now is NOT any nested route rendered in the Outlet. When you select any nested route, it will be rendered in the Outlet.</p>}
      {nestedURL && <p>Now a nested route is rendered in the Outlet.</p>}
      <nav className={styles.nav}>
        <Link className={styles.link} to="nested-1"> Nest 1 </Link>
        <Link className={styles.link} to="nested-2"> Nest 2 </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default NestedRoutes;
