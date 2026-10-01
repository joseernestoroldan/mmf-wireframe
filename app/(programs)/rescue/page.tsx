import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Rescue | Magic Marble Foundation",
  description:
    "Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide.",
};

export default function RescuePage() {
  return (
    <ContentPage
      title="Rescue"
      description="Emergency interventions to save animals from abuse, neglect, and dangerous situations worldwide."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles["rescue-article"]}>
        <h2 className={styles["rescue-title-secondary"]}>
          When Every Second Counts: Our Emergency Response
        </h2>

        <p className={styles["rescue-paragraph"]}>
          At the Magic Marble Foundation, crisis response is at the heart of our mission.
          When animals face immediate peril from severe abuse, natural disasters, or
          abandonment, our rapid deployment teams work around the clock to bring them to safety.
          No border is too distant, and no situation is too complex when a life hangs in the balance.
        </p>

        <h3 className={styles["rescue-title-tertiary"]}>
          From Crisis to Rehabilitation
        </h3>

        <p className={styles["rescue-paragraph"]}>
          A rescue operation doesn&apos;t end the moment an animal is pulled from danger.
          Each survivor immediately receives comprehensive emergency veterinary care, trauma
          rehabilitation, and nutritional support. Our dedicated specialists assess both
          their physical injuries and psychological well-being to craft tailored recovery plans.
        </p>

        <blockquote className={styles["rescue-quote"]}>
          &ldquo;Saving one animal won&apos;t change the world, but for that one animal,
          the entire world changes forever.&rdquo;
        </blockquote>

        <h3 className={styles["rescue-title-tertiary"]}>
          How You Can Help
        </h3>

        <p className={styles["rescue-paragraph"]}>
          Our emergency rescue missions rely entirely on the generosity of our global community.
          By supporting our intervention funds, you directly fuel the ambulances, medical supplies,
          and safe havens needed to answer the call when disaster strikes. Join us in being a lifeline
          for the voiceless.
        </p>
      </article>
    </ContentPage>
  );
}
