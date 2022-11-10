import React from 'react'
import {useTranslation} from "react-i18next"
import './Header.scss';

const Header = () => {
    const [t,i18n] = useTranslation("global")
  return (
    <div className='header'>
    <div className='banderas'>
    <button onClick={()=>i18n.changeLanguage("es")}><img className='bandera' src="https://www.banderasphonline.com/wp-content/uploads/2021/08/comprar-bandera-espana-sin-escudo-para-exterior-interior-1200x900.png" alt =""></img></button>
    <button onClick={()=>i18n.changeLanguage("en")}><img className='bandera' src="https://png.pngtree.com/thumb_back/fw800/background/20210204/pngtree-united-kingdom-and-england-flag-background-image_555420.jpg" alt ="className='bandera'"></img></button>
    </div>
    </div>
  )
}

export default Header