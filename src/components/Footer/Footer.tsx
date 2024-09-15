import React from "react";
import styles from "./Footer.module.scss";
import { footerMenuList } from "./footerMenuList";
import FacebookIcon from "../Header/Icons/Facebook";
import InstagramIcon from "../Header/Icons/Instagram";
import YoutubeIcon from "../Header/Icons/Youtube";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerMenu}>
          <div>
            <aside>
              <figure>
                <img src="/img/logo-2.png" alt="Logo-2" />
              </figure>
            </aside>
          </div>
          {footerMenuList.map((el, index) => (
            <div key={el.title + index} className={styles.footerMenuColumn}>
              <aside>
                <h3>{el.title}</h3>
                <ul>
                  {el.elements.map((item, index2) => (
                    <li key={item.name + index2}>
                      <a href={item.url}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          ))}
        </div>
        <div className={styles.footerMedia}>
          <p>© 2024 - ТОВ "Навчальний Центр "Параметрик"</p>
          <div className={styles.media}>
            <a href="https://www.facebook.com/parametric.center/"><FacebookIcon /></a>
            <a href="https://www.instagram.com/study_center_parametric/"><InstagramIcon /></a>
            <a href="https://www.youtube.com/channel/UC5Xay0Tw3sii-TFG6w_Tx8w"><YoutubeIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
