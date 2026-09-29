"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./NavbarMobile.module.css";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { IoMdClose as CloseIcon } from "react-icons/io";
import MobileNavigationMenu from "./MobileNavigationMenu";
import HeartIcon from "@/components/Header/Icons/HeartIcon";

const EXIT_MS = 340;

const subscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

const NavbarMobile = ({ toggleNav }: { toggleNav: () => void }) => {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );
  const [closing, setClosing] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closingRef = useRef(false);
  const restoreFocus = useRef<HTMLElement | null>(null);

  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setClosing(true);
    timer.current = setTimeout(() => {
      timer.current = null;
      toggleNav();
    }, EXIT_MS);
  }, [toggleNav]);

  useEffect(() => {
    restoreFocus.current = document.activeElement as HTMLElement | null;
    return () => {
      if (timer.current) clearTimeout(timer.current);
      restoreFocus.current?.focus();
    };
  }, []);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [requestClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={`${styles.overlay} ${closing ? styles.closing : ""}`}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <header className={styles.header}>
          <Image
            src="/logo.jpg"
            alt="Magic Marble Foundation"
            width={64}
            height={64}
            priority
            className={styles.logo}
          />
          <button
            type="button"
            onClick={requestClose}
            className={styles.closeButton}
            aria-label="Close menu"
            autoFocus
          >
            <CloseIcon size={24} aria-hidden="true" />
          </button>
        </header>

        <div className={styles.rule} />

        <main className={styles.scrollArea}>
          <nav aria-label="Mobile navigation">
            <MobileNavigationMenu toggleNav={toggleNav} />
          </nav>
        </main>

        <div className={styles.rule} />

        <footer className={styles.footer}>
          <Link
            href="/donate"
            onClick={toggleNav}
            className={styles.donateButton}
          >
            Donate <HeartIcon className={styles.heart} />
          </Link>
        </footer>
      </div>
    </div>,
    document.body
  );
};

export default NavbarMobile;
