import type { Metadata } from "next";
import SocialMedia from "@/components/SocialMedia/SocialMedia";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Social Media | Magic Marble Foundation",
  description:
    "Follow Magic Marble Foundation on Instagram, Facebook, YouTube, and TikTok for rescue stories, sanctuary updates, and ways to help.",
};

export default function SocialMediaPage() {
  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <span className={styles.topAccentBar} aria-hidden="true" />

        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>About Us &mdash; Social Media</span>

          <h1 className={styles.title}>Follow Our Journey</h1>
          <span className={styles.titleAccent} aria-hidden="true" />

          <p className={styles.lead}>
            Every rescue, every recovery, and every quiet moment of trust is
            shared across the platforms you already use. Follow along and become
            part of the story.
          </p>
        </div>
      </header>

      <main className={styles.main}>
        <SocialMedia />
      </main>

      <section className={styles.closing} aria-label="Why follow us">
        <span className={styles.closingAccent} aria-hidden="true" />
        <blockquote className={styles.quote}>
          &ldquo;Behind every post is a real animal, a real rescue, and a
          community that refused to look away.&rdquo;
        </blockquote>
        <p className={styles.quoteCta}>
          Follow, share, and help these stories reach someone who can act.
        </p>
      </section>
    </div>
  );
}
