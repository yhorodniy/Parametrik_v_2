import React, { useState } from "react";
import Annotation from "../helpers/Annotation/Annotation";

import styles from "./CourseContent.module.scss";
import DownArrow from "../helpers/DownArrow/DownArrow";
import classNames from "classnames";
import { modulesList } from "./modulesList";
import CheckIcon from "../helpers/CheckIcon/CheckIcon";

const CourseContent: React.FC = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [isShowMore, setIsShowMore] = useState(false);
  const modulesLength = modulesList.length;
  const modulesLessonsLength = modulesList.reduce((acc, module) => {
    return acc + module.lessons.length;
  }, 0);

  const toggleOpenAnswer = (id: number) => {
    if (currentModule === id) {
      setCurrentModule(0);
    } else {
      setCurrentModule(id);
    }
  };

  const currentModilesList = isShowMore ? modulesList : modulesList.slice(0, 8)

  return (
    <section className={styles.courseContent}>
      <div className="container">
        <Annotation color="#5E759E">Програма</Annotation>
        <div className={styles.titleContainer}>
          <h2>Програма курсу</h2>
          <div>
            <span>{modulesLength} модулів</span>
            <span>{modulesLessonsLength} уроків</span>
          </div>
        </div>
        <div className={styles.courseInfo}>
          <div className={styles.courseInfoModules}>
            <ul>
              {currentModilesList.map((el) => (
                <li key={el.id} className={styles.moduleItem}>
                  <div
                    className={styles.title}
                    onClick={() => toggleOpenAnswer(el.id)}
                  >
                    <h4>
                      <span>{el.name}: </span>
                      {el.title}
                    </h4>
                    <DownArrow />
                  </div>
                  {
                    <ul
                      className={classNames(
                        el.id === currentModule ? styles.open : undefined,
                        styles.lessonsList,
                      )}
                    >
                      {el.lessons.map((el, index) => (
                        <li key={index}>
                          <span>{index + 1}</span>
                          <p>{el}</p>
                        </li>
                      ))}
                      {el.result.length > 0 && el.result.map((element, index1) => (
                        <p key={index1}>
                          <CheckIcon />
                          <strong>{element}</strong>
                        </p>
                      ))}
                    </ul>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="btn main-btn" onClick={() => setIsShowMore(!isShowMore)}>
          {isShowMore ? 'Приховати модулі' : 'Показати всі модулі'}
        </button>
      </div>
    </section>
  );
};

export default CourseContent;
