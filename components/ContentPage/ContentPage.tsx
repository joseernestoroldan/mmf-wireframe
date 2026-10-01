import styles from "./ContentPage.module.css";
import Image from "next/image";

type Props = {
  title: string;
  description: string;
  imageURL: string;
  children: React.ReactNode;
};

export default function ContentPage({
  title,
  description,
  imageURL,
  children,
}: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.bgImageContainer}>
        <Image
          src={imageURL}
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <hr className={styles.separator} />
          <p className={styles.description}>{description}</p>
        </div>
      </div>
      <div className={styles.content}>
       {children}
      </div>
    </div>
  );
}
