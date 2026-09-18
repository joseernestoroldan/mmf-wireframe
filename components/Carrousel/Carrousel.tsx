"use client";

import { useState } from "react";
import Image from "next/image";
import { carouselItems } from "../../data/Carrousel";
import NextArrow from "./Arrows/NextArrow";
import PreviousArrow from "./Arrows/PreviousArrow";
import styles from "./Carrousel.module.css";
import Navbar from "../Navbar/Navbar";



const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1,
    );
  };

  const activeItem = carouselItems[activeIndex];

  return (
    <section className={styles.carousel} aria-label="Featured stories carousel">
      {/* <Navbar />2 */}
      <div className={styles.slide}>
        <Image
          className={styles.image}
          fill
          src={activeItem.href}
          alt={activeItem.title}
          sizes="100vw"
        />
        <div className={styles.scrim} />
        <div className={styles.content}>
          <p className={styles.counter}>
            {String(activeIndex + 1).padStart(2, "0")} / {String(carouselItems.length).padStart(2, "0")}
          </p>
          <h2 className={styles.title}>{activeItem.title}</h2>
          <p className={styles.description}>{activeItem.description}</p>
          <a className={styles.link} href={activeItem.href}>
            {activeItem.link}
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>

      <PreviousArrow onClick={showPrevious} />
      <NextArrow onClick={showNext} />

      <div className={styles.navigation} aria-label="Choose a slide">
        <span className={styles.navigationCount} aria-hidden="true">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        {carouselItems.map((item, index) => (
          <button
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            type="button"
            key={item.href}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show slide ${index + 1}: ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Carrousel