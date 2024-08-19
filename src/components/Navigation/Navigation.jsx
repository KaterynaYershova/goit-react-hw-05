import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        <button className={styles.button}>Home</button>
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        <button className={styles.button}>Movies</button>
      </NavLink>
    </nav>
  );
};

export default Navigation;
