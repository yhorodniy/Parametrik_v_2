import React from "react";
import styles from "./PricingPlans.module.scss";
import { pricingPlansList } from "./pricingPlansList";
import CheckIcon from "../helpers/CheckIcon/CheckIcon";
import Annotation from "../helpers/Annotation/Annotation";

const PricingPlans: React.FC = () => {
  
  return (
    <section className={styles.pricingPlans}>
      <div className="container">
        <div className={styles.pricingPlansBg} />
        <div className={styles.pricingPlansContent}>
          <Annotation>Тарифи</Annotation>
          <h2>Тарифи на навчальні пакети</h2>
          <ul className={styles.pricingPlansList}>
            {pricingPlansList.map((el, index1) => (
              <li key={index1} className={styles.pricingPlansListItem}>
                <h3>{el.title}</h3>
                <p>{el.price}</p>
                <ul>
                  {el.services.map((elem, index2) => (
                    <li key={index2}>
                      <CheckIcon />
                      <span>{elem}</span>
                    </li>
                  ))}
                </ul>
                <div className={styles.btn}>
                  <button className={el.button.type}>{el.button.text}</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
