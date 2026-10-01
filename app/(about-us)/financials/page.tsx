import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage/ContentPage";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Financials | Magic Marble Foundation",
  description:
    "Transparency in how every donation is used to save lives.",
};

export default function FinancialsPage() {
  return (
    <ContentPage
      title="Financials"
      description="Transparency in how every donation is used to save lives."
      imageURL="/carrousel/image01.webp"
    >
      <article className={styles.financialsArticle}>
        <h2 className={styles.financialsTitleSecondary}>
          Where Every Dollar Goes
        </h2>

        <p className={styles.financialsParagraph}>
          Transparency in how every donation is used to save lives. We believe
          trust is earned in the open, which is why financial clarity is not an
          afterthought for us &mdash; it is part of the promise we make to every
          supporter who helps fund our work.
        </p>

        <h3 className={styles.financialsTitleTertiary}>
          How Donations Are Allocated
        </h3>

        <p className={styles.financialsParagraph}>
          Contributions flow directly into the work: emergency rescues,
          veterinary treatment, medicine, food, and the shelters that keep
          animals safe while they recover. Keeping programs close to the funds
          means help arrives faster, with as little as possible lost along the
          way.
        </p>

        <blockquote className={styles.financialsQuote}>
          &ldquo;Generosity only changes lives when it is handled with
          care.&rdquo;
        </blockquote>

        <h3 className={styles.financialsTitleTertiary}>
          Accountability and Transparency
        </h3>

        <p className={styles.financialsParagraph}>
          We keep careful records of income and expenditure and report on our
          activities openly. Questions about where a donation goes are always
          welcome &mdash; answering them clearly is how we keep the trust our
          community places in us.
        </p>
      </article>
    </ContentPage>
  );
}
