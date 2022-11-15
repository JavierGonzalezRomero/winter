import React from 'react'
import { useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next"
import './Footer.scss';
import {NavLink} from "react-router-dom";


const Footer = () => {
    const navigate = useNavigate();
    const [t,i18n] = useTranslation("global")
  return (
    <nav className='footer'>
       <div className='footer-flex'>
      <NavLink to="/characters" activeclassname={'active'}>{t("Footer.Characters")}</NavLink>
      
      <NavLink to="/houses" activeclassname={'active'}>{t("Footer.Houses")}</NavLink>
      
      <NavLink to="/chronology" activeclassname={'active'}>{t("Footer.Chronology")}</NavLink>
      </div>
    </nav>
   
  )
}

export default Footer