type NextArrowProps = {
  onClick: () => void;
};

import styles from "./NextArrow.module.css";
import NextArrowIcon from "../SVG/NextArrowIcon";

const NextArrow = ({ onClick }: NextArrowProps) => {
  return (
    <button
      className={styles.arrow}
      type="button"
      onClick={onClick}
      aria-label="Show next slide"
    >
      <NextArrowIcon />
    </button>
  );
};

export default NextArrow;
