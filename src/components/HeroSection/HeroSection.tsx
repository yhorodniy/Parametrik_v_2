import React from "react";
import styles from "./HeroSection.module.scss";

const HeroSection: React.FC = () => {
  const navigation = [
    {
      title: 'Головна',
      url: 'parametric.center/'
    },
    {
      title: 'Курси',
      url: 'parametric.center/courses/'
    },
    {
      title: 'Revit Interior Design',
      url: '/#'
    }
  ]

  return (
    <section className={styles.heroSection}>
      <div className="container">
        <div>
          <div>
            <ul className={styles.navigationList}>
              {navigation.map((el, index) => (
                <li key={index}><a href={el.url}>{el.title}</a></li>
              ))}
            </ul>
          </div>
          <div className={styles.heroSectionContent}>
            <div className={styles.leftContent}>
              <h1>Revit Interior Design</h1>
              <p>Максимально ефективний курс для діючих архітекторів. Звільніть час для сім'ї та творчих <br /> задач з ефективним інструментом для проектування та станьте професіоналом!</p>
              <div className={styles.buttons}>
                <button className="btn main-btn">Зареєструватися на курс</button>
                <button className="btn secondary-btn">Консультація</button>
              </div>
            </div>
            <div className={styles.rightContent}>
              <img src="/img/hero-section-img.png" alt="Image" />
              <div className={styles.textAbsolute}>
                <div>
                  <h2>45+</h2>
                  <p>Випускників курсу</p>
                </div>
                <div>
                  <h2>500+</h2>
                  <p>Задоволених студентів</p>
                </div>
              </div>
              <div className={styles.studentsAbsolute}>
                <div className={styles.studentsContainer}>
                  <div>
                    <img src="/img/hero-student-1.png" alt="Student" />
                    <img src="/img/hero-student-2.png" alt="Student" />
                    <img src="/img/hero-student-3.png" alt="Student" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
