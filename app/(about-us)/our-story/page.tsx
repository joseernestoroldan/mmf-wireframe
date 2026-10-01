import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Story | Magic Marble Foundation",
  description:
    "From a small rescue mission to a global movement for animal welfare.",
};

export default function OurStoryPage() {
  return (
    <ContentPage
      title="Our Story"
      description="From a small rescue mission to a global movement for animal welfare."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.storyArticle}>
        <h2 className={styles.storyTitleSecondary}>
          From a Small Rescue Mission to a Global Movement
        </h2>

        <p className={styles.storyParagraph}>
          What began as a small, local rescue mission has grown into a global
          movement for animal welfare. The Magic Marble Foundation was built on
          a simple conviction: no animal should face suffering alone, and no
          border should stand between an animal in danger and the help it needs.
        </p>

        <h3 className={styles.storyTitleTertiary}>
          How It Began
        </h3>

        <p className={styles.storyParagraph}>
          Our first operations were modest &mdash; a handful of volunteers, a
          borrowed vehicle, and the determination to respond when no one else
          would. Those early calls shaped the standards we still work by today:
          move quickly, document every case, and never leave an animal behind.
        </p>

        <h3 className={styles.storyTitleTertiary}>
          Where We Are Today
        </h3>

        <p className={styles.storyParagraph}>
          Today our teams coordinate across countries, working alongside
          veterinarians, sanctuaries, and local communities on several
          continents. The scale of our work has changed enormously, but the
          mission has not: rescue animals from danger, rehabilitate them with
          dignity, and give them a permanent place to call home.
        </p>

        <blockquote className={styles.storyQuote}>
          &ldquo;A movement is only as strong as the first hands that refused
          to walk away.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
