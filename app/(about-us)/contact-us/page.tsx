import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us | Magic Marble Foundation",
  description: "Get in touch for partnerships, press, or general inquiries.",
};

export default function ContactUsPage() {
  return (
    <ContentPage
      title="Contact Us"
      description="Get in touch for partnerships, press, or general inquiries."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.contactArticle}>
        <h2 className={styles.contactTitleSecondary}>
          We&apos;d Love to Hear From You
        </h2>

        <p className={styles.contactParagraph}>
          Get in touch for partnerships, press, or general inquiries. Whether
          you represent an organization looking to collaborate, a journalist
          covering animal welfare, or a supporter with a question, the right
          person on our team is ready to help.
        </p>

        <h3 className={styles.contactTitleTertiary}>
          Partnerships and Press
        </h3>

        <p className={styles.contactParagraph}>
          Collaborations with clinics, transport networks, and local
          organizations extend our reach far beyond what we could achieve alone.
          Members of the press can reach our team for statements, images, and
          background on any of our programs.
        </p>

        <h3 className={styles.contactTitleTertiary}>
          General Inquiries
        </h3>

        <p className={styles.contactParagraph}>
          For questions about donations, volunteering, or visiting our
          sanctuaries, send us a message and we will respond as quickly as we
          can. Every inquiry reaches a member of the team, not an automated
          queue.
        </p>

        <blockquote className={styles.contactQuote}>
          &ldquo;Every lasting collaboration begins with a single
          message.&rdquo;
        </blockquote>
      </article>
    </ContentPage>
  );
}
