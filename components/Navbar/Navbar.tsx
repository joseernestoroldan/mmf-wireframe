"use client";
import styles from "./Navbar.module.css";
import DonateButton from "./DonateButton/DonateButton";
import Menu from "../Menu/Menu";

type NavbarProps = {
  navbarState: "menu" | "our work" | "about us" | "get involved";
  setNavbarState: (
    state: "menu" | "our work" | "about us" | "get involved",
  ) => void;
};

const Navbar = ({ navbarState, setNavbarState }: NavbarProps) => {
  return (
    <nav
      className={`${styles.navbar} ${navbarState === "menu" ? styles.visible : styles.hidden}`}
    >
      <Menu setNavbarState={setNavbarState} />
      <DonateButton/>
    </nav>
  );
};

export default Navbar;
