import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Visit Us | Magic Marble Foundation",
  description:
    "Come see our sanctuaries and meet the animals whose lives have been transformed by your support.",
};

export default function VisitUsPage() {
  return (
    <ContentPage
      title="Visit Us"
      description="Come see our sanctuaries and meet the animals whose lives have been transformed by your support."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.visitArticle}>
        <h2 className={styles.visitTitleSecondary}>
          Come See the Difference
        </h2>

        <p className={styles.visitParagraph}>
          Come see our sanctuaries and meet the animals whose lives have been
          transformed by your support. Nothing explains our work quite like
          standing in the place where recovery happens every day.
        </p>

        <blockquote className={styles.visitQuote}>
          &ldquo;A visit turns a donation into a memory &mdash; and a memory
          into a lifetime of support.&rdquo;
        </blockquote>

        <h3 className={styles.visitTitleTertiary}>
          Planning Your Visit
        </h3>

        <p className={styles.visitParagraph}>
          Our sanctuaries in Michigan and Costa Rica welcome visitors by
          arrangement. Reaching out ahead of time lets us prepare a safe, calm
          experience for both guests and animals, and keeps daily care running
          without disruption.
        </p>

        <h3 className={styles.visitTitleTertiary}>
          Meet the Residents
        </h3>

        <p className={styles.visitParagraph}>
          Walk the grounds with the people who care for the animals daily. You
          will hear the stories behind the rescues, see rehabilitation in
          progress, and understand exactly what your support sustains &mdash;
          one ordinary, extraordinary day at a time.
        </p>
      </article>
    </ContentPage>
  );
}
