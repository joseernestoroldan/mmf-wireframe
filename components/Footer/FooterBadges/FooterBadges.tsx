import Image from "next/image";
import styles from "./FooterBadges.module.css";

const BADGES = [
  {
    src: "/badges/charitynavigator.png",
    alt: "Charity Navigator Four-Star rating 2026",
    width: 832,
    height: 832,
  },
  {
    src: "/badges/greatnonprofit.png",
    alt: "GreatNonprofits 2024 Top-Rated Nonprofit",
    width: 898,
    height: 697,
  },
];

const FooterBadges = () => {
  return (
    <div className={styles.badgeCard}>
      {BADGES.map((badge) => (
        <Image
          key={badge.src}
          src={badge.src}
          alt={badge.alt}
          width={badge.width}
          height={badge.height}
          className={styles.badgeImage}
        />
      ))}
    </div>
  );
};

export default FooterBadges;
