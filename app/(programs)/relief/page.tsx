import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Relief | Magic Marble Foundation",
  description:
    "Rapid disaster and crisis response delivering food, medical supplies, and veterinary aid to affected communities.",
};

export default function ReliefPage() {
  return (
    <ContentPage
      title="Relief"
      description="Rapid disaster and crisis response delivering food, medical supplies, and veterinary aid to affected communities."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.reliefArticle}>
        <h2 className={styles.reliefTitleSecondary}>
          Rapid Response When Disaster Strikes
        </h2>

        <p className={styles.reliefParagraph}>
          Rapid disaster and crisis response delivering food, medical supplies,
          and veterinary aid to affected communities. When floods, storms, or
          emergencies hit, our teams move fast to keep animals &mdash; and the
          people who depend on them &mdash; alive.
        </p>

        <h3 className={styles.reliefTitleTertiary}>
          Delivering Aid Fast
        </h3>

        <p className={styles.reliefParagraph}>
          Speed decides outcomes in a disaster. Our teams deploy with food,
          medicine, and supplies ready, reaching affected areas while the window
          to save lives is still open and before local resources are exhausted.
        </p>

        <blockquote className={styles.reliefQuote}>
          &ldquo;In a disaster, hope arrives on wheels &mdash; carrying food,
          medicine, and people who do not turn back.&rdquo;
        </blockquote>

        <h3 className={styles.reliefTitleTertiary}>
          Supporting Communities
        </h3>

        <p className={styles.reliefParagraph}>
          Animals and communities are inseparable in a crisis. By caring for
          livestock, pets, and street animals, we help families recover without
          having to abandon the animals that depend on them for survival.
        </p>
      </article>
    </ContentPage>
  );
}
