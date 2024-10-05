import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.scss";
import Annotation from "../helpers/Annotation/Annotation";
import { testimonialsList } from "./testimonialsList";
import Quote from "../helpers/Quote/Quote";
import LefttArrow from "../helpers/LeftArrow/LeftArrow";
import RightArrow from "../helpers/RightArrow/RightArrow";

const Testimonials: React.FC = () => {
  const [currentComment, setCurrentComment] = useState(0);
  const totalComments = testimonialsList.length;
  const commentListRef = useRef<HTMLUListElement | null>(null);

  const updateSlides = useCallback(() => {
    const carouselWrapper = commentListRef.current;
    if (carouselWrapper) {
      const slideWidth = carouselWrapper.firstElementChild?.clientWidth || 0;
      const offset =
        (-slideWidth - 20) * currentComment +
        (carouselWrapper.clientWidth - (slideWidth - 20) * 1) / 2;
      carouselWrapper.style.transform = `translateX(${offset}px)`;
    }
  }, [currentComment]);

  const nextSlides = () => {
    setCurrentComment((prev: number) => (prev + 1) % totalComments);
  };

  const prevSlides = () => {
    setCurrentComment(
      (prev: number) => (prev - 1 + totalComments) % totalComments,
    );
  };

  useEffect(() => {
    updateSlides();
  }, [updateSlides, currentComment]);

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.testimonialsContainer}>
          <Annotation color="#5E759E">Відгуки</Annotation>
          <h2>Відгуки наших студентів</h2>
          <div className={styles.testimonialsContent}>
            <div className={styles.comment}>
              <div className={styles.sudent}>
                <img
                  src={testimonialsList[currentComment].student.avatar}
                  alt={testimonialsList[currentComment].student.name}
                />
                <div className={styles.studentInfo}>
                  <h3>{testimonialsList[currentComment].student.name}</h3>
                  <span>{testimonialsList[currentComment].student.prof}</span>
                </div>
              </div>
              <div className={styles.commentContent}>
                <Quote />
                <p>{testimonialsList[currentComment].comment}</p>
              </div>
              <div className={styles.buttons}>
                <button className={styles.prev} onClick={prevSlides}>
                  <LefttArrow />
                </button>
                <span>{currentComment + 1}/{totalComments}</span>
                <button className={styles.next} onClick={nextSlides}>
                  <RightArrow />
                </button>
              </div>
            </div>
            <div className={styles.advantages}>
              <div className={styles.advantagesItem}>
                <h3>99%</h3>
                <span>Рекомендують нас</span>
              </div>
              <div className={styles.advantagesItem}>
                <h3>45+</h3>
                <span>Випускників курсу</span>
              </div>
              <div className={styles.advantagesItem}>
                <h3>500+</h3>
                <span>Задовлених студентів</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
