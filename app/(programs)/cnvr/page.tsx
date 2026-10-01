import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "CNVR | Magic Marble Foundation",
  description:
    "Catch · Neuter · Vaccinate · Return — our humane approach to managing and protecting street animal populations.",
};

export default function CNVRPage() {
  return (
    <ContentPage
      title="CNVR"
      description="Catch · Neuter · Vaccinate · Return — our humane approach to managing and protecting street animal populations."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.cnvrArticle}>
        <h2 className={styles.cnvrTitleSecondary}>
          Catch &middot; Neuter &middot; Vaccinate &middot; Return
        </h2>

        <p className={styles.cnvrParagraph}>
          Our humane approach to managing and protecting street animal
          populations. CNVR addresses overpopulation at its source, reducing
          suffering block by block without removing animals from the
          communities they know.
        </p>

        <h3 className={styles.cnvrTitleTertiary}>
          The Four Steps
        </h3>

        <p className={styles.cnvrParagraph}>
          Teams humanely catch animals, veterinary staff neuter and vaccinate
          them under anesthesia, and healthy animals are returned to their
          territory. Every step happens under close medical observation, and
          each animal is released only when it is fully recovered.
        </p>

        <h3 className={styles.cnvrTitleTertiary}>
          Why It Matters
        </h3>

        <p className={styles.cnvrParagraph}>
          Sterilized street animals live longer, healthier lives, and
          populations stabilize naturally over time. Wider vaccination coverage
          also slows the spread of disease, protecting both the animals and the
          people who live alongside them.
        </p>

        <blockquote className={styles.cnvrQuote}>
          &ldquo;The kindest future for a street animal begins with one humane
          procedure.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
