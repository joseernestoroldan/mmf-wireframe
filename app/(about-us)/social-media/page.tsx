import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Social Media | Magic Marble Foundation",
  description: "Follow our daily rescues and success stories online.",
};

export default function SocialMediaPage() {
  return (
    <ContentPage
      title="Social Media"
      description="Follow our daily rescues and success stories online."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.socialArticle}>
        <h2 className={styles.socialTitleSecondary}>
          Follow the Journey, Every Day
        </h2>

        <p className={styles.socialParagraph}>
          Follow our daily rescues and success stories online. Our social
          channels bring you closer to the animals we serve &mdash; the moments
          of crisis, the slow recoveries, and the quiet victories that your
          support makes possible.
        </p>

        <h3 className={styles.socialTitleTertiary}>
          What We Share
        </h3>

        <p className={styles.socialParagraph}>
          Behind every post is a real animal and a real outcome. We share field
          updates from our rescue teams, recovery milestones from our clinics,
          and the honest, unglamorous work that happens between the headlines:
          the feeding, the cleaning, the patient waiting for a frightened animal
          to trust a human hand again.
        </p>

        <h3 className={styles.socialTitleTertiary}>
          Join the Conversation
        </h3>

        <p className={styles.socialParagraph}>
          Social media is where our community gathers. Share a story that moved
          you, help an animal in need of adoption reach the right home, or send
          the team a message &mdash; every interaction carries the mission
          further than any one organization could carry it alone.
        </p>

        <blockquote className={styles.socialQuote}>
          &ldquo;A story shared online becomes a life changed offline.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
