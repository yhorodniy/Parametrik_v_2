import React from "react";
import styles from "./GraduateCompanies.module.scss";
import Annotation from "../helpers/Annotation/Annotation";

const GraduateCompanies: React.FC = () => {
  const companiesList: string[] = [
    '/img/company-1.png',
    '/img/company-2.png',
    '/img/company-1.png',
    '/img/company-2.png',
    '/img/company-1.png',
    '/img/company-2.png',
    '/img/company-1.png',
    '/img/company-2.png',
    '/img/company-1.png',
    '/img/company-2.png',
  ]
  
  return (
    <section className={styles.graduateCompanies}>
      <div className="container">
        <div className={styles.graduateCompaniesBg}>
          <Annotation>Випускники</Annotation>
          <h2>Випускники курсів працюють <br />у провідних компаніях</h2>
          <ul className={styles.companiesList}>
            {companiesList.map(el => (
              <li>
                <img src={el} alt="Company" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GraduateCompanies;
