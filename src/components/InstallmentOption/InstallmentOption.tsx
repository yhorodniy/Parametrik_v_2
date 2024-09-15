import React from 'react';
import styles from './InstallmentOption.module.scss';

const InstallmentOption: React.FC = () => {
  return (
    <section className={styles.installment}>
      <div className="container">
        <div className={styles.installmentOption}>
          <div className={styles.installmentOptionBg}>
            <h2>Вчися зараз – плати потім!</h2>
            <p>Не виходить оплатити курс повністю? Тепер навчання<br /> стало ще доступнішим! Оплачуй будь-який курс в<br /> розстрочку на 2 платежі.</p>
            <button className='btn secondary-btn'>Зареєструватися на курс</button>
          </div>
          <img src="/img/installment-img.png" alt="Installment" />
        </div>
      </div>
    </section>
  );
};

export default InstallmentOption;