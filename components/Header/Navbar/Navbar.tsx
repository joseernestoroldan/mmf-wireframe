"use client";
import styles from "./Navbar.module.css";
import DonateButton from "./DonateButton/DonateButton";
import Menu from "../Menu/Menu";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";
import NavbarMobile from "../HamburgerMenu/NavbarMobile";

type NavbarProps = {
  navbarState: "menu" | "our work" | "about us" | "get involved";
  setNavbarState: (
    state: "menu" | "our work" | "about us" | "get involved",
  ) => void;
  onMenuLeave: () => void;
  onMenuEnter: () => void;
};

const Navbar = ({
  navbarState,
  setNavbarState,
  onMenuLeave,
  onMenuEnter,
}: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  return (
    <nav
      className={`${styles.navbar} ${navbarState === "menu" ? styles.visible : styles.hidden}`}
    >
      <Menu
        setNavbarState={setNavbarState}
        onMenuEnter={onMenuEnter}
        onMenuLeave={onMenuLeave}
      />
      <DonateButton />
      <HamburgerMenu toggleNav={toggleNav} />
      {open && <NavbarMobile toggleNav={toggleNav} />}
    </nav>
  );
};

export default Navbar;
