"use client";

import { useState } from "react";
import Image from "next/image";
import { carouselItems } from "../../data/Carrousel";
import NextArrow from "./Arrows/NextArrow";
import PreviousArrow from "./Arrows/PreviousArrow";
import styles from "./Carrousel.module.css";
import Navbar from "../Header/Navbar/Navbar";

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const changeSlide = (newIndex: number) => {
    if (newIndex === activeIndex || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setActiveIndex(newIndex);
      setIsFading(false);
    }, 300); // 300ms matches the CSS transition duration
  };

  const showPrevious = () => {
    changeSlide(activeIndex === 0 ? carouselItems.length - 1 : activeIndex - 1);
  };

  const showNext = () => {
    changeSlide(activeIndex === carouselItems.length - 1 ? 0 : activeIndex + 1);
  };

  const activeItem = carouselItems[activeIndex];

  return (
    <section className={styles.carousel} aria-label="Featured stories carousel">
      <div className={styles.slide}>
        <Image
          className={styles.image}
          fill
          src={activeItem.href}
          alt={activeItem.title}
          sizes="100vw"
        />
        <div className={styles.scrim} />
        <div
          className={`${styles.content} ${isFading ? styles.fadeOut : styles.fadeIn}`}
        >
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
        {carouselItems.map((item, index) => (
          <button
            className={`${styles.dot} ${index === activeIndex ? styles.activeDot : ""}`}
            type="button"
            key={item.href}
            onClick={() => changeSlide(index)}
            aria-label={`Show slide ${index + 1}: ${item.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
};

export default Carrousel;
