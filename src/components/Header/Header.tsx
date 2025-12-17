import { useRef } from "react";
import styles from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const pathName = useLocation().pathname;

    console.log("Header component rendered");

    return (
        <>
            <h1>React Router DOM Example... </h1>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <Link className={pathName ==="/" ? styles.active : ""} to="/"> Home </Link>
                    <Link className={pathName === "/about" ? styles.active : ""} to="/about"> About </Link>
                    <Link className={pathName === "/posts" ? styles.active : ""} to="/posts"> Post </Link>
                </nav>
            </header>
        </>
    );
};

export default Header;
