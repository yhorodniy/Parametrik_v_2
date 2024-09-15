import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./GraduateWorks.module.scss";
import Annotation from "../helpers/Annotation/Annotation";

const GraduateWorks: React.FC = () => {
  const worksList: string[] = [
    "/img/graduatedWorks/work_1.png",
    "/img/graduatedWorks/work_2.png",
    "/img/graduatedWorks/work_3.png",
    "/img/graduatedWorks/work_1.png",
    "/img/graduatedWorks/work_2.png",
    "/img/graduatedWorks/work_3.png",
    "/img/graduatedWorks/work_1.png",
    "/img/graduatedWorks/work_2.png",
    "/img/graduatedWorks/work_3.png",
    "/img/graduatedWorks/work_1.png",
    "/img/graduatedWorks/work_2.png",
    "/img/graduatedWorks/work_3.png",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = worksList.length
  const worksListRef = useRef<HTMLUListElement | null>(null)

  const updateSlides = useCallback(() => {
    const carouselWrapper = worksListRef.current;
    if (carouselWrapper) {
      const slideWidth = carouselWrapper.firstElementChild?.clientWidth || 0;
      const offset = -slideWidth * currentSlide + (carouselWrapper.clientWidth - slideWidth * 3) / 2;
      carouselWrapper.style.transform = `translateX(${offset}px)`;
    }
  }, [currentSlide])

  const nextSlides = () => {
    setCurrentSlide((prev: number) => (prev + 3) % totalSlides);
  };

  const prevSlides = () => {
    setCurrentSlide((prev: number) => (prev - 3 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    updateSlides();
  }, [updateSlides, currentSlide]);

  const totalPage = Math.ceil(totalSlides / 3)
  const curretPage = Math.floor(currentSlide / 3) + 1

  return (
    <section className={styles.graduateWorksSection}>
      <div className="container">
        <Annotation color="#5E759E">Відгуки</Annotation>
        <div className={styles.top}>
          <h2>Роботи наших випускників</h2>
          <div className={styles.buttons}>
            <button className={styles.prev} onClick={prevSlides}>
              <img src="/img/graduatedWorks/prev_button.png" alt="Button" />
            </button>
            <span>{curretPage}/{totalPage}</span>
            <button className={styles.next} onClick={nextSlides}>
              <img  src="/img/graduatedWorks/next_button.png" alt="Button" />
            </button>
          </div>
        </div>
        <div className={styles.worksListCarousel}>
          <div className={styles.worksListCarouselContainer}>

            <ul className={styles.worksList} ref={worksListRef}>
              {worksList.map((el, index) => (
                <li className={styles.workSlide} key={index}>
                  <img src={el} alt="#" />
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export default GraduateWorks;
