import React from "react";
import styles from "./ProjectShowcase.module.scss";
import Comment from "./Comment/Comment";
import Annotation from "../helpers/Annotation/Annotation";

const ProjectShowcase: React.FC = () => {
  return (
    <section className={styles.projectShowcase}>
      <div className="container">
        <div className={styles.projectShowcaseBg}>
          <Annotation color="#5E759E">Наш студент</Annotation>
          <h2>Проект випускниці по курсу <br />Revit Interior Design</h2>
          <div className={styles.studentWork}>
            <div className={styles.imgContainer}>
              <img src="/img/student-work-img.png" alt="Graduate student work" />
            </div>
            <div className={styles.studentWorkDescription}>
              <div>
                <Comment text='Точка А:'>
                  Ольга прийшла на курс, не маючи досвіду роботи з Revit. Вона лише починала свій шлях у дизайні інтер'єру, маючи художню освіту та велике бажання навчитися.
                </Comment>
              </div>
              <div>
                <Comment text='Точка Б:'>
                  Ольга стала впевненим користувачем Revit. Зараз вона працює дизайнером у відомій студії, створюючи професійні проекти інтер'єрів.
                </Comment>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
