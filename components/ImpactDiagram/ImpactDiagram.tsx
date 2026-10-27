"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@/components/Header/Logo/Logo";
import { impactStats } from "@/data/ImpactDiagram";
import styles from "./ImpactDiagram.module.css";

/**
 * Positions for each stat, expressed as an angle (degrees, 0 = top, clockwise)
 * and radius factor (1 = edge of the diagram container).
 * Manually tuned to match the reference layout.
 */
const positions: { angle: number; radius: number }[] = [
  { angle: 0, radius: 0.42 },      // top center       – Animals Rescued
  { angle: 40, radius: 0.44 },     // top-right        – Sterilized & Vaccinated
  { angle: 80, radius: 0.46 },     // right            – Animals Sheltered
  { angle: 120, radius: 0.46 },    // bottom-right     – Food Provided
  { angle: 160, radius: 0.44 },    // bottom-right-low – Vegan Meals Provided
  { angle: 200, radius: 0.44 },    // bottom-left-low  – Children Reached
  { angle: 240, radius: 0.46 },    // bottom-left      – People Educated
  { angle: 280, radius: 0.46 },    // left             – Educational Programs
  { angle: 320, radius: 0.44 },    // top-left         – Relief Efforts
];

/** Convert angle (0 = top, clockwise) + radius to percentage coords */
function polarToPercent(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: 50 + radius * 100 * Math.cos(rad),
    y: 50 + radius * 100 * Math.sin(rad),
  };
}

const CONNECTOR_INNER_RADIUS = 0.16; // where the line starts (edge of ring)

const ImpactDiagram = () => {
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
      { threshold: 0.15 }
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
      className={`${styles.section} ${styles.animateSection} ${isVisible ? styles.inView : ""}`}
    >
      <div className={styles.diagram}>
        {/* Decorative rings */}
        <div className={styles.ringOuter} />
        <div className={styles.ringInner} />

        {/* Center circle with logo */}
        <div className={styles.centerCircle}>
          <Logo className={styles.logoWrapper} priority={false} src="/logoBlack.png"/>
        </div>

        {/* Connector lines */}
        {impactStats.map((_, i) => {
          const pos = positions[i];
          if (!pos) return null;
          const angleDeg = pos.angle - 90;
          const angleRad = (angleDeg * Math.PI) / 180;
          const innerPx = CONNECTOR_INNER_RADIUS * 700;
          const outerPx = 0.27 * 700;
          const length = outerPx - innerPx;

          const startX = 50 + CONNECTOR_INNER_RADIUS * 100 * Math.cos(angleRad);
          const startY = 50 + CONNECTOR_INNER_RADIUS * 100 * Math.sin(angleRad);

          return (
            <div
              key={`connector-${i}`}
              className={styles.connector}
              style={{
                left: `${startX}%`,
                top: `${startY}%`,
                width: `${length}px`,
                transform: `rotate(${angleDeg}deg)`,
                opacity: isVisible ? 1 : 0,
                transition: `opacity 0.6s ease ${0.1 * i}s`,
              }}
            >
              <div className={styles.connectorLine} />
            </div>
          );
        })}

        {/* Stat items */}
        {impactStats.map((stat, i) => {
          const pos = positions[i];
          if (!pos) return null;
          const { x, y } = polarToPercent(pos.angle, pos.radius);

          return (
            <div
              key={stat.label}
              className={`${styles.statItem} ${isVisible ? styles.visible : ""}`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transitionDelay: `${0.1 * i}s`,
              }}
            >
              <span className={styles.statNumber}>{stat.number}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImpactDiagram;