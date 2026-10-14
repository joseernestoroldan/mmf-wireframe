import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import styles from "./SocialMedia.module.css";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/magicmarblefoundation",
    displayUrl: "instagram.com/magicmarblefoundation",
    icon: FaInstagram,
    cta: "Follow daily rescues and behind-the-scenes moments.",
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/magicmarblefoundation",
    displayUrl: "facebook.com/magicmarblefoundation",
    icon: FaFacebook,
    cta: "Join our community and help these stories travel further.",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@magicmarblefoundation",
    displayUrl: "youtube.com/@magicmarblefoundation",
    icon: FaYoutube,
    cta: "Watch full rescue missions and sanctuary updates.",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@themagicmarble",
    displayUrl: "tiktok.com/@themagicmarble",
    icon: FaTiktok,
    cta: "Quick, uplifting moments from our animals and our team.",
  },
];

const SocialMedia = () => {
  return (
    <section
      className={styles.section}
      aria-label="Magic Marble Foundation on social media"
    >
      <div className={styles.inner}>
        <ul className={styles.grid}>
          {SOCIAL_LINKS.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={item.name} className={styles.gridItem}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}
                  style={{ animationDelay: `${index * 90}ms` }}
                  aria-label={`Visit Magic Marble Foundation on ${item.name} (opens in a new tab)`}
                >
                  <span className={styles.cardTop}>
                    <span className={styles.iconBadge} aria-hidden="true">
                      <Icon />
                    </span>
                    <FaArrowUpRightFromSquare
                      className={styles.externalIcon}
                      aria-hidden="true"
                    />
                  </span>

                  <span className={styles.cardName}>{item.name}</span>
                  <span className={styles.cardUrl}>{item.displayUrl}</span>

                  <span className={styles.cardDivider} aria-hidden="true" />

                  <span className={styles.cardCta}>{item.cta}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default SocialMedia;
