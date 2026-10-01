import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Volunteer | Magic Marble Foundation",
  description:
    "Join our team on the ground. Give your time to help in our clinics, sanctuaries, and outreach programs.",
};

export default function VolunteerPage() {
  return (
    <ContentPage
      title="Volunteer"
      description="Join our team on the ground. Give your time to help in our clinics, sanctuaries, and outreach programs."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.volunteerArticle}>
        <h2 className={styles.volunteerTitleSecondary}>
          Give Your Time, Change a Life
        </h2>

        <p className={styles.volunteerParagraph}>
          Join our team on the ground. Give your time to help in our clinics,
          sanctuaries, and outreach programs &mdash; volunteering is one of the
          most direct ways to turn compassion into practical, daily care.
        </p>

        <h3 className={styles.volunteerTitleTertiary}>
          Where You Can Help
        </h3>

        <p className={styles.volunteerParagraph}>
          Volunteers support clinic days, help maintain sanctuary grounds,
          assist at events and outreach sessions, and lend professional skills
          where they are needed most. There is a place for many kinds of hands
          and backgrounds.
        </p>

        <h3 className={styles.volunteerTitleTertiary}>
          What Volunteering Takes
        </h3>

        <p className={styles.volunteerParagraph}>
          Reliability, patience, and respect for animals that may arrive
          frightened or hurt. Training is provided &mdash; what we ask for is
          commitment: showing up ready to do the work that needs doing, week
          after week.
        </p>

        <blockquote className={styles.volunteerQuote}>
          &ldquo;Time given freely is care made visible.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
