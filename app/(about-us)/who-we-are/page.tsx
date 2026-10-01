import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Who We Are | Magic Marble Foundation",
  description:
    "Meet the passionate team behind our worldwide operations.",
};

export default function WhoWeArePage() {
  return (
    <ContentPage
      title="Who We Are"
      description="Meet the passionate team behind our worldwide operations."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.teamArticle}>
        <h2 className={styles.teamTitleSecondary}>
          The People Behind the Mission
        </h2>

        <p className={styles.teamParagraph}>
          Meet the passionate team behind our worldwide operations. From field
          responders and veterinarians to coordinators and volunteers, the Magic
          Marble Foundation is powered by people who have chosen to put their
          skills at the service of animals in need.
        </p>

        <h3 className={styles.teamTitleTertiary}>
          A Team Built on Compassion
        </h3>

        <p className={styles.teamParagraph}>
          Our people share a single standard: compassion expressed through
          action. Whether it is coordinating a transport across a border or
          comforting a frightened animal through a long night at the clinic,
          every role is treated as part of one promise &mdash; that the animals
          in our care will never be treated as numbers.
        </p>

        <blockquote className={styles.teamQuote}>
          &ldquo;Rescue work is never a solo act; it is a chain of people who
          each choose to hold on.&rdquo;
        </blockquote>

        <h3 className={styles.teamTitleTertiary}>
          Expertise in the Field
        </h3>

        <p className={styles.teamParagraph}>
          Rescue demands more than goodwill. Our responders train in safe animal
          handling and emergency protocols, while our veterinary staff bring
          specialist knowledge in surgery, trauma rehabilitation, and shelter
          medicine to every case that comes through our doors.
        </p>
      </article>
    </ContentPage>

  );
}
