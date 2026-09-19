import Image from "next/image";
import styles from "./AboutUsNavigation.module.css";

type MenuItem = {
  id: string;
  label: string;
  subtitle: string;
  thumbnail?: string;
  vertical?: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: "our-story",
    label: "Our Story",
    subtitle: "From a small rescue mission to a global movement for animal welfare.",
    thumbnail: "/carrousel/image03.webp",
    vertical: true,
  },
  {
    id: "who-we-are",
    label: "Who We Are",
    subtitle: "Meet the passionate team behind our worldwide operations.",
  },
  {
    id: "social-media",
    label: "Social Media",
    subtitle: "Follow our daily rescues and success stories online.",
  },
  {
    id: "financial",
    label: "Financials",
    subtitle: "Transparency in how every donation is used to save lives.",
  },
  {
    id: "contact-us",
    label: "Contact Us",
    subtitle: "Get in touch for partnerships, press, or general inquiries.",
  },
];

const AboutUsNavigation = () => {
  return (
    <nav className={styles.menu} aria-label="About Us navigation">
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
                sizes={item.vertical ? "(max-width: 800px) 50vw, 300px" : "80px"}
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

export default AboutUsNavigation;
