import React from 'react';
import styles from './CoursePreview.module.scss';
import Annotation from '../helpers/Annotation/Annotation';
import classNames from 'classnames';
import CursivArrow from '../helpers/CursivArrow/CursivArrow';
import Videos from './Videos/Videos';

const CoursePreview: React.FC = () => {
  return (
    <section className={styles.coursePreview}>
      <div className="container">
        <div className={styles.coursePreviewBg}>
          <Annotation color="#5E759E">Наші заняття</Annotation>
          <h2>Подивіться, як проходять <br />наші заняття</h2>
          <Videos url="https://player.vimeo.com/video/619757401" />

          <div className={classNames(styles.textAbsolute, styles.left)}>
            <h3>45+</h3>
            <p>Випускників курсу</p>
          </div>
          <div className={classNames(styles.textAbsolute, styles.right)}>
            <h3>500+</h3>
            <p>Задовлених студентів</p>
          </div>
          <div className={styles.leftArrow}>
            <CursivArrow direction='right' />
          </div>
          <div className={styles.rightArrow}>
            <CursivArrow direction='left' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;