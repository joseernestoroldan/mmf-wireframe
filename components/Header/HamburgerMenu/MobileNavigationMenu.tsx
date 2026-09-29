import Link from "next/link";
import type { CSSProperties } from "react";
import styles from "./MobileNavigationMenu.module.css";

const sections = [
  {
    id: "our-work",
    title: "Our Work",
    links: [
      { id: "rescue", label: "Rescue" },
      { id: "cnvr", label: "CNVR" },
      { id: "care-center", label: "Care Center Nepal" },
      { id: "sanctuary", label: "Sanctuary" },
      { id: "relief", label: "Relief" },
      { id: "education", label: "Education" },
      { id: "adoption", label: "Adoption" },
    ],
  },
  {
    id: "about-us",
    title: "About Us",
    links: [
      { id: "our-story", label: "Our Story" },
      { id: "who-we-are", label: "Who We Are" },
      { id: "social-media", label: "Social Media" },
      { id: "financials", label: "Financials" },
      { id: "contact-us", label: "Contact Us" },
    ],
  },
  {
    id: "get-involved",
    title: "Get Involved",
    links: [
      { id: "donate", label: "Donate" },
      { id: "volunteer", label: "Volunteer" },
      { id: "visit-us", label: "Visit Us" },
    ],
  },
];

const MobileNavigationMenu = ({ toggleNav }: { toggleNav: () => void }) => {
  return (
    <div className={styles.menuContent}>
      {sections.map((section, index) => (
        <section
          key={section.id}
          className={styles.section}
          style={{ "--i": index } as CSSProperties}
        >
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <ul className={styles.linkList}>
            {section.links.map((link) => (
              <li key={link.id}>
                <Link
                  href={`/${link.id}`}
                  onClick={toggleNav}
                  className={styles.linkItem}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default MobileNavigationMenu;
