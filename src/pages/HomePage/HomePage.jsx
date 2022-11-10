import React from 'react'
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import Headers from '../Header/Header';
import './HomePage.scss';

const HomePage = () => {
  
  return (
    <div className='fondo-header'>
     
       <Headers></Headers>
         
     
   
     
             
        <Footer></Footer>
      
    
    </div>
  )
}

export default HomePage