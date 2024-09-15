import React from "react";
import styles from "./RelatedCourses.module.scss";
import Annotation from "../helpers/Annotation/Annotation";
import { relatedCoursesList } from "./relatedCoursesList";

const RelatedCourses: React.FC = () => {
  
  return (
    <section className={styles.relatedCourses}>
      <div className="container">
        <div className={styles.relatedCoursesContainer}>
          <Annotation color="#5E759E">Інші курси</Annotation>
          <h2>Курси, які вас можуть зацікавити</h2>
          <ul className={styles.relatedCoursesList}>
            {relatedCoursesList.map(el => (
              <li>
                <img src={el.img} alt={el.title} />
                <div className={styles.courseInfo}>
                  <h3>{el.title}</h3>
                  <span>{el.lessons}</span>
                  <p>{el.price}</p>
                </div>
                <button className="btn main-btn">Деталі курсу</button>
              </li>
            ))}
          </ul>
          <div className={styles.helpDesk}>
            <div className={styles.helpDeskText}>
              <h2>Потрібна допомога?</h2>
              <p>Наші експерти готові допомогти вам обрати курс, що найкраще відповідає вашим цілям та потребам.</p>
              <button className="btn secondary-btn">Отримати консультацію</button>
            </div>
            <img src="/img/help-img.png" alt="Help" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedCourses;
