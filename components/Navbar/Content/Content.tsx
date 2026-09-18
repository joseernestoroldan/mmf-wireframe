import { Children } from "react";
import styles from "./Content.module.css";

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
      <h1 className={styles.title}>{navbarState}</h1>
      <hr />
      
    </div>
  );
};

export default Content;
