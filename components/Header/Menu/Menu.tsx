import styles from "./Menu.module.css";

type MenuProps = {
  setNavbarState: (
    state: "menu" | "our work" | "about us" | "get involved",
  ) => void;
  onMenuEnter?: () => void;
  onMenuLeave?: () => void;
};

const Menu = ({ setNavbarState, onMenuEnter, onMenuLeave }: MenuProps) => {
  return (
    <ul className={styles.menu} onMouseEnter={onMenuEnter} onMouseLeave={onMenuLeave}>
      <li onMouseEnter={() => setNavbarState("our work")}>Our Work</li>
      <li onMouseEnter={() => setNavbarState("about us")}>About Us</li>
      <li onMouseEnter={() => setNavbarState("get involved")}>Get Involved</li>
      
    </ul>
  );
};

export default Menu;
