import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Sanctuary | Magic Marble Foundation",
  description:
    "Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom.",
};

export default function SanctuaryPage() {
  return (
    <ContentPage
      title="Sanctuary"
      description="Permanent safe havens for rescued animals in Michigan and Costa Rica, offering lifelong care and freedom."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.sanctuaryArticle}>
        <h2 className={styles.sanctuaryTitleSecondary}>
          A Lifelong Home
        </h2>

        <p className={styles.sanctuaryParagraph}>
          Permanent safe havens for rescued animals in Michigan and Costa Rica,
          offering lifelong care and freedom. For animals that cannot return to
          the wild or be adopted, the sanctuary is the end of the journey
          &mdash; and the beginning of a real life.
        </p>

        <h3 className={styles.sanctuaryTitleTertiary}>
          Michigan and Costa Rica
        </h3>

        <p className={styles.sanctuaryParagraph}>
          Our two sanctuaries serve different climates and different needs, but
          hold the same standard: space to move, honest food, veterinary care
          on hand, and handlers who know every resident&apos;s history and
          temperament.
        </p>

        <h3 className={styles.sanctuaryTitleTertiary}>
          Life at the Sanctuary
        </h3>

        <p className={styles.sanctuaryParagraph}>
          Days here follow a gentle rhythm of feeding, enrichment, and care.
          Residents live without fear of neglect or exploitation &mdash; for
          some, it is the first safe place they have ever known.
        </p>

        <blockquote className={styles.sanctuaryQuote}>
          &ldquo;Freedom means nothing without a safe place to spend it.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
