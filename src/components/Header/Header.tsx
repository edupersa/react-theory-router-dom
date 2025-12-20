import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const pathName = useLocation().pathname;

  console.log("Header component rendered");

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link className={pathName === "/" ? styles.active : ""} to="/">
            Home
          </Link>
          <Link
            className={pathName === "/about" ? styles.active : ""}
            to="/about"
          >
            About
          </Link>
          <Link
            className={pathName === "/nested-routes" ? styles.active : ""}
            to="/nested-routes"
          >
            Nested-Routes
          </Link>
          <Link
            className={pathName.includes("/parameter-routes") ? styles.active : ""}
            to={`/parameter-routes`}
          >
            Parameter-Routes
          </Link>
          <Link
            className={pathName === "/query-parameters" ? styles.active : ""}
            to={`/query-parameters`}
          >
            Query-Parameters
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
