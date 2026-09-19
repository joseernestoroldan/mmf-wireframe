import Image from "next/image";
import styles from "./OurWorkNavigation.module.css";

type MenuItem = {
  id: string;
  label: string;
  subtitle: string;
  thumbnail?: string;
  vertical?: boolean;
};

const menuItems: MenuItem[] = [
  {
    id: "rescue",
    label: "Rescue",
    subtitle: "Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide",
    thumbnail: "/carrousel/image03.webp",
  },
  {
    id: "cnvr",
    label: "CNVR",
    subtitle: "Catch · Neuter · Vaccinate · Return — our humane approach to managing and protecting street animal populations",
    thumbnail: "/carrousel/image05.webp",
    vertical: true,
  },
  {
    id: "care-center",
    label: "Care Center Nepal",
    subtitle: "A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter",
    thumbnail: "/carrousel/image02.webp",
  },
  {
    id: "sanctuary",
    label: "Sanctuary",
    subtitle: "Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom",
    thumbnail: "/carrousel/image01.webp",
  },
  {
    id: "relief",
    label: "Relief",
    subtitle: "Rapid disaster and crisis response delivering food, medical supplies, and veterinary aid to affected communities",
    thumbnail: "/carrousel/image04.webp",
  },
  {
    id: "education",
    label: "Education",
    subtitle: "Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness",
  },
  {
    id: "adoption",
    label: "Adoption",
    subtitle: "Connecting rescued animals with loving forever homes through our comprehensive adoption process",
  },
];

const OurWorkNavigation = () => {
  return (
    <nav className={styles.menu} aria-label="Our Work programs">
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
                sizes={item.vertical ? "(max-width: 800px) 50vw, 300px" : "88px"}
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

export default OurWorkNavigation;
