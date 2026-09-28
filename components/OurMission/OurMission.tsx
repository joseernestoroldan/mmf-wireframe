"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./OurMission.module.css";

const OurMission = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.container} ${styles.animateSection} ${isVisible ? styles.inView : ""}`}
    >
      <div className={styles.content}>
        <h2 className={styles.heading}>Our Mission</h2>
        <span className={styles.headingAccent} aria-hidden="true" />
        <p className={styles.subtitle}>
          Dedicated to the well-being of all animals, everywhere.
        </p>
        
        <p className={styles.missionStatement}>
          &ldquo;To rescue, rehabilitate, and advocate for animals in need. We envision a world where every animal is treated with compassion, and we work tirelessly to create lasting change through direct care, education, and community support.&rdquo;
        </p>
      </div>
    </section>
  );
};

export default OurMission;