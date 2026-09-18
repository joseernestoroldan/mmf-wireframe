import styles from "./Menu.module.css";

type MenuProps = {
  setNavbarState: (
    state: "menu" | "our work" | "about us" | "get involved",
  ) => void;
};

const Menu = ({ setNavbarState }: MenuProps) => {
  return (
    <ul className={styles.menu}>
      <li onMouseEnter={() => setNavbarState("our work")}>Our Work</li>
      <li onMouseEnter={() => setNavbarState("about us")}>About Us</li>
      <li onMouseEnter={() => setNavbarState("get involved")}>Get Involved</li>
      
    </ul>
  );
};

export default Menu;
