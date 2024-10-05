import React, { useCallback, useEffect, useRef, useState } from "react";

import styles from "./GraduateWorks.module.scss";
import Annotation from "../helpers/Annotation/Annotation";

const GraduateWorks: React.FC = () => {
  const [ currentFullImg, setCurrentFullImg ] = useState<number | null>(null);

  const worksList: string[] = [
    "/img/graduatedWorks/work_1.JPG",
    "/img/graduatedWorks/work_2.JPG",
    "/img/graduatedWorks/work_3.JPG",
    "/img/graduatedWorks/work_4.JPG",
    "/img/graduatedWorks/work_5.JPG",
    "/img/graduatedWorks/work_6.JPG",
    "/img/graduatedWorks/work_7.JPG",
    "/img/graduatedWorks/work_8.JPG",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = worksList.length
  const worksListRef = useRef<HTMLUListElement | null>(null)

  const updateSlides = useCallback(() => {
    const carouselWrapper = worksListRef.current;
    if (carouselWrapper) {
      const slideWidth = carouselWrapper.firstElementChild?.clientWidth || 0;
      const offset = -slideWidth * currentSlide + (carouselWrapper.clientWidth - slideWidth * 2) / 2;
      carouselWrapper.style.transform = `translateX(${offset}px)`;
    }
  }, [currentSlide])

  const nextSlides = () => {
    setCurrentSlide((prev: number) => (prev + 2) % totalSlides);
  };

  const prevSlides = () => {
    setCurrentSlide((prev: number) => (prev - 2 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    updateSlides();
  }, [updateSlides, currentSlide]);

  const totalPage = Math.ceil(totalSlides / 2)
  const curretPage = Math.floor(currentSlide / 2) + 1

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
                <li className={styles.workSlide} key={index} onClick={() => setCurrentFullImg(index)}>
                  <img src={el} alt="#" />
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
      {currentFullImg !== null && (
        <div className={styles.fullImg} onClick={() => setCurrentFullImg(null)}>
          <img src={worksList[currentFullImg]} alt="" />
        </div>
      )}
    </section>
  );
};

export default GraduateWorks;
