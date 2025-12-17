import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    console.log("Header component rendered");

    return (
        <>
            <h1>React Router DOM Example... </h1>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link to="/"> Home </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/posts"> Post </Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
