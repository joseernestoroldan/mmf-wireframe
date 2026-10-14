import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  className?: string;
  priority?: boolean;
};

const Logo = ({ className, priority = true }: LogoProps) => {
  return (
    <Link
      className={className || styles.logo}
      href="/"
      aria-label="Go to homepage"
    >
      <Image
        className={styles.logoImage}
        src="/logo.png"
        alt="Organization logo"
        width={120}
        height={120}
        priority={priority}
      />
    </Link>
  );
};

export default Logo;
