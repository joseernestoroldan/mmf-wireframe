type PreviousArrowProps = {
  onClick: () => void;
};

import styles from "./PreviousArrow.module.css";
import PreviousArrowIcon from "../SVG/PreviousArrowIcon";

const PreviousArrow = ({ onClick }: PreviousArrowProps) => {
  return (
    <button
      className={styles.arrow}
      type="button"
      onClick={onClick}
      aria-label="Show previous slide"
    >
      <PreviousArrowIcon />
    </button>
  );
};

export default PreviousArrow;
