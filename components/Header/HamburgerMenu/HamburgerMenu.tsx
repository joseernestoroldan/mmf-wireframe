"use client";
import styles from "./HamburgerMenu.module.css";
import { GiHamburgerMenu as HamburgerIcon } from "react-icons/gi";


const HamburgerMenu = ({ toggleNav }: { toggleNav: () => void }) => {
  return (
    <button
      className={styles.button}
      onClick={toggleNav}
      type="button"
      aria-label="Open menu"
      aria-haspopup="dialog"
    >
      <HamburgerIcon className={styles.icon} />
    </button>
  );
};

export default HamburgerMenu;
