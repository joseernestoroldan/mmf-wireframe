import Link from "next/link";
import HeartIcon from "../../Icons/HeartIcon";
import styles from "./DonateButton.module.css";

const DonateButton = () => {
  return (
    <Link className={styles.donateButton} href="/#donation">
      Donate <HeartIcon className={styles.icon} />
    </Link>
  );
};

export default DonateButton;
