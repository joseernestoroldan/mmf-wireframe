import Link from "next/link";
import Logo from "@/components/Header/Logo/Logo";
import FooterBadges from "@/components/Footer/FooterBadges/FooterBadges";
import styles from "./Footer.module.css";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaLocationDot,
  FaShieldHalved,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/magicmarblefoundation",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/magicmarblefoundation",
    icon: FaFacebook,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@magicmarblefoundation",
    icon: FaYoutube,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@themagicmarble",
    icon: FaTiktok,
  },
];

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          {/* Column 1: Logo & Social Networks */}
          <div className={styles.brandColumn}>
            <div className={styles.logoWrapper}>
              <Logo
                className={styles.footerLogo}
                priority={false}
                src="/logoBlack.png"
              />
            </div>
            <h2 className={styles.brandName}>Magic Marble Foundation</h2>
            <p className={styles.brandTagline}>
              Dedicated to emergency rescue, medical rehabilitation, and lifelong
              protection for vulnerable animals worldwide.
            </p>

            <div className={styles.socialSection}>
              <span className={styles.socialLabel}>Follow Our Work</span>
              <ul className={styles.socialList}>
                {SOCIAL_LINKS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.name}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                        aria-label={`Visit Magic Marble Foundation on ${item.name}`}
                      >
                        <Icon aria-hidden="true" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Column 2: Registered Address */}
          <div className={styles.addressColumn}>
            <h3 className={styles.columnHeading}>
              <FaLocationDot className={styles.headingIcon} aria-hidden="true" />
              <span>Register Address</span>
            </h3>

            <div className={styles.addressCard}>
              <address className={styles.address}>
                <span className={styles.addressLine}>
                  455 E. Eisenhower Parkway #355
                </span>
                <span className={styles.addressLine}>
                  Ann Arbor, Michigan, 48108
                </span>
                <span className={styles.addressLine}>USA</span>
              </address>

              <Link href="/contact-us" className={styles.contactLink}>
                Contact Us &rarr;
              </Link>
            </div>
          </div>

          {/* Column 3: Tax-Exempt Status & Donations */}
          <div className={styles.legalColumn}>
            <div className={styles.badge}>
              <FaShieldHalved aria-hidden="true" />
              <span>501(c)(3) Status</span>
            </div>

            <h3 className={styles.columnHeading}>Tax-Exempt Organization</h3>

            <p className={styles.taxText}>
              USA based tax-exempt charitable organization (tax-id number
              86-1626792) under Section 501(c)(3) of the Internal Revenue Code.
              Donations are tax-deductible as allowed by law.
            </p>

            <Link href="/#donation" className={styles.donateAction}>
              Make a Donation
            </Link>

            <FooterBadges />
          </div>
        </div>

        {/* Bottom Bar: Copyright & Quick Navigation */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Magic Marble Foundation. All rights
            reserved.
          </p>

          <ul className={styles.bottomLinks}>
            <li>
              <Link href="/who-we-are" className={styles.bottomLink}>
                Who We Are
              </Link>
            </li>
            <li>
              <Link href="/our-story" className={styles.bottomLink}>
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/financials" className={styles.bottomLink}>
                Financials
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className={styles.bottomLink}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
