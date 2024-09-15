import React from "react";
import CheckIcon from "../helpers/CheckIcon/CheckIcon";
import Cursor from "../helpers/Cursor/Cursor";

import styles from "./CourseSkils.module.scss";
import Annotation from "../helpers/Annotation/Annotation";
import { skillsList } from "./skillsList";

const CourseSkils: React.FC = () => {
  return (
    <section className={styles.courseContent}>
      <div className="container">
        <div className={styles.courseContentBg}>
          <Annotation color="#5E759E">Курс</Annotation>
          <h2>Курс розроблений відповідно до<br /> вимог роботодавців</h2>
          <button className="btn main-btn">Зареєструватися на курс</button>
          <ul className={styles.contentListAbsolute}>
            {skillsList.map((el, index) => (
              <li key={index} style={{ backgroundColor: el.bg}}>
                <div>
                  <CheckIcon />
                  <p>{el.text}</p>
                  <Cursor color={el.cursor} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CourseSkils;
