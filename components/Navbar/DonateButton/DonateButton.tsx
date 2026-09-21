import HeartIcon from "../../Icons/HeartIcon";
import styles from "./DonateButton.module.css";

const DonateButton = () => {
  return (
    <button className={styles.donateButton} type="button">
      Donate <HeartIcon className={styles.icon} />
    </button>
  );
};

export default DonateButton;
