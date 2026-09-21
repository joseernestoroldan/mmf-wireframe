import Image from "next/image";
import styles from "./AboutUsNavigation.module.css";

type MenuItem = {
  id: string;
  label: string;
  subtitle: string;
  thumbnail: string;
};

const menuItems: MenuItem[] = [
  {
    id: "our-story",
    label: "Our Story",
    subtitle: "From a small rescue mission to a global movement for animal welfare.",
    thumbnail: "/carrousel/image03.webp",
  },
  {
    id: "who-we-are",
    label: "Who We Are",
    subtitle: "Meet the passionate team behind our worldwide operations.",
    thumbnail: "/carrousel/image01.webp",
  },
  {
    id: "social-media",
    label: "Social Media",
    subtitle: "Follow our daily rescues and success stories online.",
    thumbnail: "/carrousel/image05.webp",
  },
  {
    id: "financial",
    label: "Financials",
    subtitle: "Transparency in how every donation is used to save lives.",
    thumbnail: "/carrousel/image04.webp",
  },
  {
    id: "contact-us",
    label: "Contact Us",
    subtitle: "Get in touch for partnerships, press, or general inquiries.",
    thumbnail: "/carrousel/image02.webp",
  },
];

const AboutUsNavigation = () => {
  return (
    <nav className={styles.menu} aria-label="About Us navigation">
      {menuItems.map((item) => (
        <a
          key={item.id}
          className={styles.menuItem}
          href={`#${item.id}`}
        >
          <span className={styles.thumbWrap}>
            <Image
              src={item.thumbnail}
              alt=""
              fill
              sizes="88px"
              className={styles.thumbImage}
            />
          </span>
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
