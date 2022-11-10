import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {useTranslation} from "react-i18next"
import Header from "../Header/Header";
import './CharacterDetail.scss';
import Footer from "../Footer/Footer";
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';



const CharacterDetail = () => {

  const { nameCharacter } = useParams();
  const [character, setCharacter] = useState([]); 
  const [houses,setHouses] = useState([])
  const [t,i18n] = useTranslation("global")

  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const {data} = await axios.get(
        `https://api.got.show/api/show/characters/${nameCharacter}`);
      setCharacter(data);
      getData2(data.house)   
    } getData();
    async function getData2(housesName){
      const {data} = await axios.get(`https://api.got.show/api/show/houses/${housesName}`)    
      setHouses(data)
      console.log(data)  
      }
  }, [])   
  
  
  


  return (
    
    <>
    <Header></Header>
      <div className="DetallesPerosnaje"> 
      <div className="mitad-superior">     
        
        <img src={character?.image} alt="" /> 
        <p>{character?.name}</p>

        </div>    
        <div className="mitad-inferior">
        <div className="casas">
        <h1>{t("Details.House")}</h1>
        <p>{character?.house}</p>
        <SimpleBarReact style={{maxHeight:300}}>
        {houses && houses.map((item,index) => {
          return (
            <div className='card1' key = {index}>
            {character?.house === "House Stark" ? <img src="https://toppng.com/uploads/preview/house-stark-jon-sigil-game-of-thrones-stark-logo-115628801416r51xwlyzi.png" alt=""></img>  :<img src={houses.logoURL} alt=""/> }                     
            </div>
          );
        })}
        </SimpleBarReact>
         
        </div>       
        <div className="alianzas">
        <h1>{t("Details.Allegiances")}</h1>

        {character.allegiances && character.allegiances.map((item,index) => {
          return (
            <div className='card1' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })}
        </div>
        <div className="apariciones">
        <h1>{t("Details.Appearances")}</h1> 
        <SimpleBarReact style={{maxHeight:300}}>
        {character.appearances && character.appearances.map((item,index) => {
          return (
            <div className='card1' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })}
        </SimpleBarReact>
        </div>
        <div className="padre">
        <h1>{t("Details.Father")}</h1>
        <p>{character?.father}</p>
        </div>
        <div className="descendientes">
        <h1>{t("Details.Siblings")}</h1>
        <SimpleBarReact style={{maxHeight:300}}>
        {character.siblings && character.siblings.map((item,index) => {
          return (
            <div className='card1' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })}      
        </SimpleBarReact>
        </div>
        <div className="titulos">
        <h1>{t("Details.Titles")}</h1>
        <SimpleBarReact style={{maxHeight:300}}>
        {character.titles && character.titles.map((item,index) => {
          return (
            <div className='card1' key = {index}>
             <p>{item}</p>                       
            </div>
            
          );
        })} 
        </SimpleBarReact>
        </div>
        </div>
        
      </div>
      <button className="atras" onClick={() => navigate("/characters")}><img src="https://s3.eu-west-3.amazonaws.com/vr.360fotoproducto.com/demo_sencillo_hospital/images/volver_flecha.png" alt=""></img> Volver</button>
      <Footer></Footer>
    </>
  )
}

export default CharacterDetail