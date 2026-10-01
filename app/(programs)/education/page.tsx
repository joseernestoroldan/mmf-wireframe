import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Education | Magic Marble Foundation",
  description:
    "Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness.",
};

export default function EducationPage() {
  return (
    <ContentPage
      title="Education"
      description="Community outreach programs teaching compassion, responsible pet ownership, and animal welfare awareness."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.educationArticle}>
        <h2 className={styles.educationTitleSecondary}>
          Teaching Compassion Forward
        </h2>

        <p className={styles.educationParagraph}>
          Community outreach programs teaching compassion, responsible pet
          ownership, and animal welfare awareness. Lasting change begins when
          understanding is passed from one person to the next.
        </p>

        <h3 className={styles.educationTitleTertiary}>
          Classroom and Community
        </h3>

        <p className={styles.educationParagraph}>
          Our educators work with schools and community groups to bring animal
          welfare into everyday conversation. Interactive sessions help young
          people see care as a practice, not an abstract idea &mdash; and give
          them the language to speak up for those who cannot.
        </p>

        <h3 className={styles.educationTitleTertiary}>
          Responsible Pet Ownership
        </h3>

        <p className={styles.educationParagraph}>
          Practical guidance on health, sterilization, identification, and kind
          handling gives owners the knowledge to prevent suffering before it
          starts. Informed communities notice sooner and ask for help earlier.
        </p>

        <blockquote className={styles.educationQuote}>
          &ldquo;Teach a child kindness toward animals, and that lesson outlives
          us all.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
