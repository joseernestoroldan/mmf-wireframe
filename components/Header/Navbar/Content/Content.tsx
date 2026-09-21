import { Children } from "react";
import styles from "./Content.module.css";
import OurWorkNavigation from "./Navigation/OurWorkNavigation";
import AboutUsNavigation from "./Navigation/AboutUsNavigation";
import GetInvolvedNavigation from "./Navigation/GetInvolvedNavigation";
import DonateButton from "../DonateButton/DonateButton";

type ContentProps = {
  navbarState: "menu" | "our work" | "about us" | "get involved";
  setNavbarState: (
    state: "menu" | "our work" | "about us" | "get involved",
  ) => void;
};

const Content = ({ navbarState, setNavbarState }: ContentProps) => {
  return (
    <div
      className={`${styles.content} ${navbarState !== "menu" ? styles.visible : styles.hidden}`}
      onMouseLeave={() => setNavbarState("menu")}
    >
      <header className={styles.header}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{navbarState}</h1>
          <button 
            className={styles.returnButton} 
            onClick={() => setNavbarState("menu")}
            aria-label="Return to menu"
          >
            <span className={styles.returnArrow}>←</span> Return
          </button>
        </div>
        <DonateButton />
      </header>
      <hr />
      {navbarState === "our work" && <OurWorkNavigation />}
      {navbarState === "about us" && <AboutUsNavigation />}
      {navbarState === "get involved" && <GetInvolvedNavigation />}
    </div>
  );
};

export default Content;
