import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Donate | Magic Marble Foundation",
  description:
    "Your contribution directly funds rescues, medical care, and food for animals in need.",
};

export default function DonatePage() {
  return (
    <ContentPage
      title="Donate"
      description="Your contribution directly funds rescues, medical care, and food for animals in need."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.donateArticle}>
        <h2 className={styles.donateTitleSecondary}>
          Your Gift at Work
        </h2>

        <p className={styles.donateParagraph}>
          Your contribution directly funds rescues, medical care, and food for
          animals in need. Each donation becomes something tangible: a dose of
          medicine, a safe transport through the night, a warm place for a
          recovering animal to rest.
        </p>

        <h3 className={styles.donateTitleTertiary}>
          Funding Rescues and Care
        </h3>

        <p className={styles.donateParagraph}>
          Donations power the full chain of our work &mdash; from the first call
          for help, through emergency treatment and rehabilitation, and onward
          to sanctuaries or adoption programs. Your support is what keeps that
          chain unbroken when a new case arrives.
        </p>

        <blockquote className={styles.donateQuote}>
          &ldquo;No gift is small when it becomes the reason an animal survives
          the night.&rdquo;
        </blockquote>

        <h3 className={styles.donateTitleTertiary}>
          Ways to Give
        </h3>

        <p className={styles.donateParagraph}>
          Give once or give monthly &mdash; every amount contributes to the same
          mission. Recurring support in particular lets our teams plan ahead,
          stock supplies, and say yes to cases that would otherwise go
          unanswered.
        </p>
      </article>
    </ContentPage>
  );
}
