"use client";
import Logo from "@/components/Header/Logo/Logo";
import Navbar from "@/components/Header/Navbar/Navbar";
import styles from "./Header.module.css";
import { useState, useRef, useCallback } from "react";
import Content from "./Navbar/Content/Content";

type NavbarType = "menu" | "our work" | "about us" | "get involved";

const Header = () => {
  const [navbarState, setNavbarState] = useState<NavbarType>("menu");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => {
      setNavbarState("menu");
      closeTimer.current = null;
    }, 400);
  }, [cancelClose]);

  const handleSetNavbarState = useCallback(
    (state: NavbarType) => {
      cancelClose();
      setNavbarState(state);
    },
    [cancelClose],
  );

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <Navbar
          navbarState={navbarState}
          setNavbarState={handleSetNavbarState}
          onMenuLeave={scheduleClose}
          onMenuEnter={cancelClose}
        />
        <Content
          navbarState={navbarState}
          setNavbarState={handleSetNavbarState}
          onPanelEnter={cancelClose}
          onPanelLeave={scheduleClose}
        />
      </div>
    </div>
  );
};

export default Header;
