import React, { useState } from "react";
import classNames from "classnames";
import PhoneIcon from "./Icons/Phone";
import FacebookIcon from "./Icons/Facebook";
import InstagramIcon from "./Icons/Instagram";
import YoutubeIcon from "./Icons/Youtube";
import SearchIcon from "./Icons/Search";
import DropdownArrow from "./Icons/DropdownArrow";

import styles from "./Header.module.scss";
import useBreakpoint from "../../customHooks/UseBreakpoint";
import TelegramIcon from "./Icons/Telegram";


const Header: React.FC = () => {
  const [ isServises, setIsServises] = useState(false)
  const [ isCourses, setIsCourses ] = useState(false)
  const [ isContact, setIsContact ] = useState(false)

  const breakpoint = useBreakpoint()

  const contactsInfo = [
    {
      icon: <PhoneIcon />,
      url: 'tel:+380931700502',
      text: '0931700502'
    },
    {
      icon: <PhoneIcon />,
      url: 'tel:+380679903040',
      text: '0679903040'
    },
    {
      icon: <PhoneIcon />,
      url: 'tel:+380504507122',
      text: '0504507122'
    },
    {
      icon: <FacebookIcon />,
      url: 'https://www.facebook.com/parametric.center',
      text: 'Facebook'
    },
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/study_center_parametric',
      text: 'Instagram'
    },
    {
      icon: <YoutubeIcon />,
      url: 'https://www.youtube.com/channel/UC5Xay0Tw3sii-TFG6w_Tx8w',
      text: 'Youtube'
    },
    {
      icon: <TelegramIcon />,
      url: 'https://t.me/RevitTC',
      text: 'Telegram'
    },
  ]

  const toggleServiceSubmenu = () => {
    setIsServises(!isServises)

    if(isCourses) {
      setIsCourses(!isCourses)
    }
    if(isContact) {
      setIsContact(!isContact)
    }
  }

  const toggleContactSubmenu = () => {
    setIsContact(!isContact)
    
    if(isServises) {
      setIsServises(!isServises)
    }
  }


  return (
    <header className={styles.header}>
      <div className={classNames("container", styles.headerContainer)}>
        <div className={styles.headerLogo}>
          <a href="/" rel="home">
            <img src="/img/logo.png" alt="Logo" />
          </a>
        </div>
        <nav>
          <ul className={styles.navigationMenu}>
            <li>
              <a href="/about-us">Про нас</a>
            </li>
            <li>
              <a href="/courses">Онлайн курси</a>
            </li>
            <li>
              <div onClick={toggleServiceSubmenu} style={{display:"flex", alignItems:'center', gap:'3px'}}>
                <span>Послуги</span>
                <DropdownArrow />
              </div>
              <div className={styles.servisesSubmenu} style={{display: isServises ? 'block' : 'none'}}>
                <ul>
                  <li>
                    <a href="/bim-audit">Аудит та ВІМ вкорінення</a>
                  </li>
                  <li>
                    <div onClick={() => setIsCourses(!isCourses)} style={{display:"flex", alignItems:'center', gap:'3px'}}>
                      <span>Навчальні курси</span>
                      <DropdownArrow />
                    </div>
                    <div className={styles.servisesSubmenuCourses} style={{display: isCourses ? 'flex' : 'none'}}>
                      <ul>
                        <li>
                          <a href="/autodesk-revit-architecture">Autodesk Revit Architecture</a>
                        </li>
                        <li>
                          <a href="/autodesk-revit-interior-design">Autodesk Revit Interior Design</a>
                        </li>
                        <li>
                          <a href="/autodesk-revit-mep">Autodesk Revit MEP</a>
                        </li>
                        <li>
                          <a href="/autodesk-autocad">Autodesk AutoCAD</a>
                        </li>
                        <li>
                          <a href="/autodesk-revit-structure">Autodesk Revit Structure</a>
                        </li>
                        <li>
                          <a href="/autodesk-robot">Autodesk Robot</a>
                        </li>
                        <li>
                          <a href="/autodesk-civil-3d">Autodesk Civil 3D</a>
                        </li>
                        <li>
                          <a href="/autodesk-dynamo">Autodesk DYNAMO</a>
                        </li>
                        <li>
                          <a href="/autodesk-navisworks">Autodesk Navisworks</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="/#">Розробка ПЗ</a>
                  </li>
                  <li>
                    <a href="/#">BIM Моделювання</a>
                  </li>
                  <li>
                    <a href="/#">Створення ВІМ-контенту (Сімейства/Families)</a>
                  </li>
                  <li>
                    <a href="/#">BIM to Scan</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <a href="/news-feed">Новини</a>
            </li>
            <li>
              <div onClick={toggleContactSubmenu} style={{display:"flex", alignItems:'center', gap:'3px'}}>
                {breakpoint === 'tablet' && contactsInfo[0].icon}
                <span style={{marginLeft: '10px'}}>{contactsInfo[0].text}</span>
                <DropdownArrow />
              </div>
              <div className={styles.contactsSubmenu} style={{display: isContact ? 'block' : 'none'}}>
                <ul>
                  {contactsInfo.map(el => (
                    <li>
                      <a href={el.url}>
                        {el.icon}
                        <span style={{marginLeft: '15px'}}>{el.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
        <div className={styles.actionBtns}>
          <div className={styles.search}>
            <SearchIcon />
            <span className={styles.separatop} />
          </div>
          <div>
            <a href='/wp-login' className={styles.signIn}>Вхід</a>
            <a href='/register' className={styles.signUp}>Реєстрація</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
