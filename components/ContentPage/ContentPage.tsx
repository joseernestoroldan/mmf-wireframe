import styles from "./ContentPage.module.css";
import Image from "next/image";
import Link from "next/link";

export type ContentPageProps = {
  badge: string;
  title: string;
  subtitle: string;
  image?: string;
  details?: {
    heading: string;
    text: string;
  }[];
  children?: React.ReactNode;
};

export default function ContentPage({
  badge,
  title,
  subtitle,
  image,
  details,
  children,
}: ContentPageProps) {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>

        <header className={styles.header}>
          <span className={styles.badge}>{badge}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </header>

        {image && (
          <div className={styles.imageWrapper}>
            <Image
              src={image}
              alt={title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
              className={styles.image}
            />
          </div>
        )}

        {children && <div className={styles.content}>{children}</div>}

        {details && details.length > 0 && (
          <div className={styles.cardGrid}>
            {details.map((detail, idx) => (
              <div key={idx} className={styles.infoCard}>
                <h2 className={styles.infoCardTitle}>{detail.heading}</h2>
                <p className={styles.infoCardText}>{detail.text}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
