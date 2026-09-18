import Image from "next/image";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <a className={styles.logo} href="#home" aria-label="Go to homepage">
      <Image
        className={styles.logoImage}
        src="/logo.png"
        alt="Organization logo"
        width={120}
        height={120}
        priority
      />
    </a>
  );
};

export default Logo;
