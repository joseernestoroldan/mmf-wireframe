import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Adoption | Magic Marble Foundation",
  description:
    "Connecting rescued animals with loving forever homes through our comprehensive adoption process.",
};

export default function AdoptionPage() {
  return (
    <ContentPage
      title="Adoption"
      description="Connecting rescued animals with loving forever homes through our comprehensive adoption process."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.adoptionArticle}>
        <h2 className={styles.adoptionTitleSecondary}>
          Finding Forever Homes
        </h2>

        <p className={styles.adoptionParagraph}>
          Connecting rescued animals with loving forever homes through our
          comprehensive adoption process. The final step of every rescue is the
          most important one: a match that lasts a lifetime.
        </p>

        <h3 className={styles.adoptionTitleTertiary}>
          Our Adoption Process
        </h3>

        <p className={styles.adoptionParagraph}>
          Every adoption begins with a conversation. We learn about your home,
          routine, and expectations, then introduce animals whose needs and
          personality fit &mdash; carefully, without pressure, and at a pace
          that respects both sides of the match.
        </p>

        <blockquote className={styles.adoptionQuote}>
          &ldquo;Adoption is the moment a rescued animal stops surviving and
          starts living.&rdquo;
        </blockquote>

        <h3 className={styles.adoptionTitleTertiary}>
          A Match That Lasts
        </h3>

        <p className={styles.adoptionParagraph}>
          Our support does not end at handover. Guidance on settling in,
          feeding, and health helps new owners and animals adjust together,
          because a thoughtful match is what turns an adoption into a home.
        </p>
      </article>
    </ContentPage>
  );
}
