import Header from "../Header/Header";
import styles from "./LayoutPages.module.css";
import { Outlet } from "react-router-dom";

const LayoutPages = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <Outlet></Outlet>
      <p> Home Page Footer</p>
    </div>
  );
};

export default LayoutPages;
