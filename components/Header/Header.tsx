"use client";
import Logo from "@/components/Header/Logo/Logo";
import Navbar from "@/components/Header/Navbar/Navbar";
import styles from "./Header.module.css";
import { useState } from "react";
import Content from "./Navbar/Content/Content";

type NavbarType = "menu" | "our work" | "about us" | "get involved";

const Header = () => {
  const [navbarState, setNavbarState] = useState<NavbarType>("menu");

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar navbarState={navbarState} setNavbarState={setNavbarState} />
        <Content navbarState={navbarState} setNavbarState={setNavbarState} />
      </div>
    </div>
  );
};

export default Header;
