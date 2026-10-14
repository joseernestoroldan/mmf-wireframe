import type { Metadata } from "next";
import Image from "next/image";
import ContentPage from "@/components/ContentPage/ContentPage";
import { teamCategories } from "@/data/team";
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
      <div className={styles.pageContainer}>
        {/* Intro & Category Jump Links */}
        <section className={styles.introSection} aria-labelledby="who-we-are-heading">
          <h2 id="who-we-are-heading" className={styles.introTitle}>
            Leadership Dedicated to Compassion and Action
            <span className={styles.titleAccent} />
          </h2>
          <p className={styles.introLead}>
            Our global mission is guided by experienced leaders in veterinary
            medicine, nonprofit governance, logistics, and grassroots animal
            welfare. From institutional oversight to boots-on-the-ground rescue
            units, meet the people working around the clock to give vulnerable
            animals a second chance at life.
          </p>

          <nav className={styles.categoryNav} aria-label="Team sections">
            {teamCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className={styles.navPill}
              >
                <span>{category.title}</span>
                <span className={styles.navCount}>
                  {category.members.length}
                </span>
              </a>
            ))}
          </nav>
        </section>

        {/* 3 Categories: Board Members, International Directors, Country Leads */}
        {teamCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className={styles.categorySection}
            aria-labelledby={`category-title-${category.id}`}
          >
            <header className={styles.categoryHeader}>
              <span className={styles.categoryEyebrow}>Category</span>
              <div className={styles.categoryTitleRow}>
                <h3
                  id={`category-title-${category.id}`}
                  className={styles.categoryTitle}
                >
                  {category.title}
                </h3>
                <span className={styles.categorySubtitle}>
                  &bull; {category.subtitle}
                </span>
              </div>
              <p className={styles.categoryDesc}>{category.description}</p>
            </header>

            <div className={styles.membersGrid}>
              {category.members.map((member) => (
                <article
                  key={member.id}
                  className={styles.memberCard}
                  aria-label={`${member.name}, ${member.role}`}
                >
                  <div className={styles.cardImageWrapper}>
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 680px) 100vw, (max-width: 1024px) 220px, 200px"
                      className={styles.cardImage}
                    />
                    {member.country && (
                      <span className={styles.countryTag}>
                        <span className={styles.countryDot} />
                        {member.country}
                      </span>
                    )}
                  </div>

                  <div className={styles.cardContent}>
                    <div className={styles.cardMeta}>
                      <h4 className={styles.memberName}>{member.name}</h4>
                      <p className={styles.memberRole}>{member.role}</p>
                    </div>

                    <p className={styles.memberBio}>{member.bio}</p>

                    <div className={styles.cardFooter}>
                      <a
                        href={`mailto:${member.email}`}
                        className={styles.emailLink}
                        aria-label={`Send email to ${member.name} at ${member.email}`}
                      >
                        <svg
                          className={styles.emailIcon}
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>{member.email}</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {/* Closing Brand Quote */}
        <blockquote className={styles.teamQuote}>
          &ldquo;Behind every rescue mission, every sanctuary rehabilitation, and
          every community outreach program is a united team proving that borders
          should never stand between an animal in danger and the help it
          needs.&rdquo;
        </blockquote>
      </div>
    </ContentPage>
  );
}
