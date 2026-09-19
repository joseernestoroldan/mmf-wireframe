import Image from "next/image";
import styles from "./GetInvolvedNavigation.module.css";

type MenuItem = {
  id: string;
  label: string;
  subtitle: string;
  thumbnail?: string;
  vertical?: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: "donate",
    label: "Donate",
    subtitle: "Your contribution directly funds rescues, medical care, and food for animals in need.",
    thumbnail: "/carrousel/image02.webp",
    vertical: true,
  },
  {
    id: "volunteer",
    label: "Volunteer",
    subtitle: "Join our team on the ground. Give your time to help in our clinics, sanctuaries, and outreach programs.",
    thumbnail: "/carrousel/image01.webp",
    vertical: true,
  },
  {
    id: "visit-us",
    label: "Visit Us",
    subtitle: "Come see our sanctuaries and meet the animals whose lives have been transformed by your support.",
    thumbnail: "/carrousel/image04.webp",
    vertical: true,
  },
];

const GetInvolvedNavigation = () => {
  return (
    <nav className={styles.menu} aria-label="Get Involved programs">
      {menuItems.map((item) => (
        <a
          key={item.id}
          className={`${styles.menuItem} ${item.thumbnail ? styles.hasThumb : styles.noThumb} ${item.vertical ? styles.vertical : ""}`}
          href={`#${item.id}`}
          style={{ gridArea: item.id }}
        >
          {item.thumbnail && (
            <span className={styles.thumbWrap}>
              <Image
                src={item.thumbnail}
                alt=""
                fill
                sizes="(max-width: 800px) 33vw, 250px"
                className={styles.thumbImage}
              />
            </span>
          )}
          <span className={styles.itemText}>
            <span className={styles.itemLabel}>{item.label}</span>
            <span className={styles.itemSub}>{item.subtitle}</span>
          </span>
          <span className={styles.arrow}>›</span>
        </a>
      ))}
    </nav>
  );
};

export default GetInvolvedNavigation;
