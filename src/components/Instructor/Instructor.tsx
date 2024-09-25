import React from "react";
import styles from "./Instructor.module.scss";
import Annotation from "../helpers/Annotation/Annotation";
import Quote from "../helpers/Quote/Quote";
import { achievements } from "./achivments";

const Instructor: React.FC = () => {

  return (
    <section className={styles.instructor}>
      <div className="container">
        <div className={styles.instructorBg}>
          <Annotation color="#5E759E">Викладач</Annotation>
          <h2>Ваш наставник на курс</h2>
          <div className={styles.teacherContainer}>
            <ul className={styles.teacherAchivement}>
              {achievements.map((el, index) => (
                <li key={index}>
                  <img src={el.goal} alt="Goal" />
                  <p>{el.text}</p>
                </li>
              ))}
            </ul>
            <div className={styles.teacherInfo}>
              <img src="/img/teacher-2.png" alt="Teacher" />
              <div className={styles.teacherInfoContent}>
                <h4>Захар Вітик</h4>
                <p className={styles.position}>Тор-рейтинговий фрілансер на <span>Upwork</span></p>
                <Quote />
                <p className={styles.description}>Моя мета – допомогти студентам не тільки освоїти Revit, але й розкрити свій творчий потенціал. Разом ми створимо проекти, які надихають та змінюють простір.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;
