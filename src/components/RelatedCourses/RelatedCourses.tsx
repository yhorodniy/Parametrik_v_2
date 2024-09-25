import React, { useState } from "react";
import styles from "./RelatedCourses.module.scss";
import Annotation from "../helpers/Annotation/Annotation";
import { relatedCoursesList } from "./relatedCoursesList";

const RelatedCourses: React.FC = () => {
  const [ isMoreCourses, setIsMoreCourses ] = useState(false)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOnClick: any = (url: string) => {
    const location = window.location
    location.assign(url)
  }

  const currentCoursesShow = isMoreCourses ? relatedCoursesList : relatedCoursesList.slice(0, 4)
  
  return (
    <section className={styles.relatedCourses}>
      <div className="container">
        <div className={styles.relatedCoursesContainer}>
          <Annotation color="#5E759E">Інші курси</Annotation>
          <h2>Курси, які вас можуть зацікавити</h2>
          <ul className={styles.relatedCoursesList}>
            {currentCoursesShow.map(el => (
              <li key={el.id}>
                <a href={el.url}>
                  <img src={el.img} alt={el.title} />
                </a>
                <div className={styles.courseInfo}>
                  <h3>{el.title}</h3>
                  <span>{el.lessons}</span>
                  <p>{el.price}</p>
                </div>
                <button className="btn main-btn" onClick={() => handleOnClick(el.url)}>Деталі курсу</button>
              </li>
            ))}
          </ul>
          <button className="btn main-btn" onClick={() => setIsMoreCourses(!isMoreCourses)}>
            {!isMoreCourses ? 'Більше курсів' : 'Приховати'}
          </button>
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
