import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import Annotation from "../helpers/Annotation/Annotation";
import { faqList } from "./faqList";
import DownArrow from "../helpers/DownArrow/DownArrow";
import classNames from "classnames";

const FAQ: React.FC = () => {
  const [ currentQuestion, setCurrentQuestion ] = useState(0)

  const toggleOpenAnswer = (id: number) => {
    if(currentQuestion === id) {
      setCurrentQuestion(0)
    } else {
      setCurrentQuestion(id)
    }
  }
  
  return (
    <section className={styles.faq}>
      <div className="container">
        <Annotation color="#5E759E">FAQ</Annotation>
        <h2>Часті запитання про курс Revit</h2>
        <div className={styles.faqSections}>
          <div className={styles.leftSection}>
            {faqList.map((el, index) => (
              <div
                className={classNames(styles.faqListItem, currentQuestion === index ? styles.active : undefined)}
                onClick={() => toggleOpenAnswer(index)}
              >
                <div className={styles.questionElement}>
                  <h4>{el.title}</h4>
                  <DownArrow />
                </div>
              </div>
            ))}
          </div>
          <div className={styles.rightSection}>
            <div className={styles.text}>
              <p>{faqList[currentQuestion].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
