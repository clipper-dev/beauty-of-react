import React from "react";
import styles from "./Navbar.module.css";
import { navbarData } from "../../data/navbar";
import { Link } from "react-router-dom";
function Navbar({ currentTab, changeTab }) {
  return (
    <div className={styles.container}>
      {navbarData.map((item, index) => {
        return (
          <Link 
            to={item.path}
            className={
              currentTab === index
                ? [styles.menuItem, styles.menuItemSelected].join(" ")
                : styles.menuItem
            }
            key={index}
            onClick={() => {
              changeTab(index);
            }}
          >
            {item.display}
          </Link>
        );
      })}
    </div>
  );
}

export default Navbar;
