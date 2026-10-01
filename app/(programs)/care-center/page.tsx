import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Care Center Nepal | Magic Marble Foundation",
  description:
    "A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter.",
};

export default function CareCenterPage() {
  return (
    <ContentPage
      title="Care Center Nepal"
      description="A full-service veterinary clinic in Kathmandu providing medical care, rehabilitation, and shelter."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.careArticle}>
        <h2 className={styles.careTitleSecondary}>
          Full-Service Care in Kathmandu
        </h2>

        <p className={styles.careParagraph}>
          A full-service veterinary clinic in Kathmandu providing medical care,
          rehabilitation, and shelter. The Care Center is where rescued animals
          in Nepal begin their recovery &mdash; and, for many, where it is
          finally completed.
        </p>

        <blockquote className={styles.careQuote}>
          &ldquo;Healing is not a single procedure; it is a place, a routine,
          and time, given generously.&rdquo;
        </blockquote>

        <h3 className={styles.careTitleTertiary}>
          Clinic and Rehabilitation
        </h3>

        <p className={styles.careParagraph}>
          Our veterinarians handle everything from emergency surgery to ongoing
          treatment and physical rehabilitation. Diagnostics, medicine, and
          follow-up care all happen under one roof, so recovery is never
          interrupted by a missing resource.
        </p>

        <h3 className={styles.careTitleTertiary}>
          Shelter and Recovery
        </h3>

        <p className={styles.careParagraph}>
          Beyond the clinic, animals find a quiet place to heal &mdash; with
          proper nutrition, warmth, and daily attention from staff who know each
          resident by name. Once stabilized, they move on to adoption programs
          or long-term placement.
        </p>
      </article>
    </ContentPage>
  );
}
