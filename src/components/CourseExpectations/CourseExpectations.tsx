import React from 'react'
import Annotation from '../helpers/Annotation/Annotation'

import styles from './CourseExpectations.module.scss'

interface Expectations {
  img: string,
  title: string,
  desc: string
}

const CourseExpectations: React.FC = () => {
  const expectations: Expectations[] = [
    {
      img: `/img/advantages-item-img.png`,
      title: `Робота з реальними кейсами`,
      desc: `Протягом курсу ви будете працювати над реальними проектами, які допоможуть закріпити знання та підготувати вас до реальних викликів у професійній діяльності.`
    },
    {
      img: `/img/advantages-item-img.png`,
      title: `Підтримка та зворотний зв'язок `,
      desc: `Отримайте індивідуальні консультації та рекомендації від досвідченого викладача, який допоможе вам краще зрозуміти матеріал і вдосконалити свої навички.`
    },
    {
      img: `/img/advantages-item-img.png`,
      title: `Практичні знання роботи з Revit`,
      desc: `Ви дізнаєтеся, як використовувати Revit для створення професійних проектів. Заняття включають в себе моделювання, створення креслень та налаштування матеріалів`
    },
    {
      img: `/img/advantages-item-img.png`,
      title: `Сертифікат про завершення курсу`,
      desc: `Після завершення курсу ви отримаєте сертифікат, який підтвердить ваші навички роботи з Revit і буде цінним доповненням до вашого професійного портфоліо.`
    },
  ]

  return (
    <section className={styles.courseExpectations}>
      <div className="container">
        <Annotation color="#5E759E">Переваги</Annotation>
        <h2>Що на тебе чекає?</h2>
        <div className={styles.expectationsList}>
          <img src='/img/expectations-logo-1.png' alt='Expectations' />
          <img src='/img/expectations-logo-2.png' alt='Expectations' />
          {expectations.map((element, index) => (
            <div key={index} className={styles.expectationsItem}>
              <img src={element.img} alt={element.title} width='48' height='48' />
              <h3>{element.title}</h3>
              <p>{element.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseExpectations