import React from "react";
import Annotation from "../helpers/Annotation/Annotation";

import styles from "./CourseAdvantages.module.scss";

interface Advantage {
  img: string,
  title: string,
  desc: string
}

const CourseAdvantages: React.FC = () => {
  const advantagesList: Advantage[] = [
    {
      img: `/img/advantages-item-img.png`,
      title: `Початківці в дизайні інтер'єру`,
      desc: `Якщо ви тільки починаєте свій шлях у сфері дизайну інтер'єру і хочете опанувати програму Revit з нуля, цей курс допоможе вам отримати фундаментальні знання та навички для створення проектів.`
    },
    {
      img: `/img/advantages-item-img.png`,
      title: `Професійні дизайнери`,
      desc: `Ви вже працюєте в індустрії дизайну, але хочете освоїти нові технології для підвищення якості та ефективності ваших проектів. Курс дасть можливість дізнатися про передові методи роботи в Revit.`
    },
    {
      img: `/img/advantages-item-img.png`,
      title: `Архітектори та будівельники`,
      desc: `Курс ідеально підходить для архітекторів та будівельників, які прагнуть покращити свої навички візуалізації та деталізації інтер'єрів, щоб створювати більш функціональні та естетично привабливі простори.`
    }
  ]

  return (
    <section className={styles.courseAdvantages}>
      <div className="container">
        <div className={styles.courseAdvantagesContainer}>
          <Annotation color="#5E759E">Переваги</Annotation>
          <h2>Для кого цей курс?</h2>
          <div className={styles.advantagesList}>
            {advantagesList.map((advantage, index) => (
              <div key={index} className={styles.advantageItem}>
                <img src={advantage.img} alt={advantage.title} width='48' height='48' />
                <h3>{advantage.title}</h3>
                <p>{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAdvantages;
