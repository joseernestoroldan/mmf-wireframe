"use client";
import styles from "./Navbar.module.css";
import DonateButton from "./DonateButton/DonateButton";
import Menu from "../Menu/Menu";

type NavbarProps = {
  navbarState: "menu" | "our work" | "about us" | "get involved";
  setNavbarState: (
    state: "menu" | "our work" | "about us" | "get involved",
  ) => void;
  onMenuLeave: () => void;
  onMenuEnter: () => void;
};

const Navbar = ({ navbarState, setNavbarState, onMenuLeave, onMenuEnter }: NavbarProps) => {
  return (
    <nav
      className={`${styles.navbar} ${navbarState === "menu" ? styles.visible : styles.hidden}`}
    >
      <Menu setNavbarState={setNavbarState} onMenuEnter={onMenuEnter} onMenuLeave={onMenuLeave} />
      <DonateButton />
    </nav>
  );
};

export default Navbar;
