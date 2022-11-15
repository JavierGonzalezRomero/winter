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
            {character?.house === "House Stark" ? <img src="https://toppng.com/uploads/preview/house-stark-jon-sigil-game-of-thrones-stark-logo-115628801416r51xwlyzi.png" alt=""></img>
            :character?.house === "House Karstark" ? <img src="https://i.pinimg.com/originals/e1/2d/dc/e12ddc4e47bdad0097eb1377a8e25d33.png" alt=""></img> 
            :character?.house === "House Cassel" ? <img src="http://awoiaf.westeros.org/images/thumb/c/c3/House_Cassel.PNG/205px-House_Cassel.PNG" alt=""></img>
            :character?.house === "House Greyjoy" ? <img src="https://64.media.tumblr.com/tumblr_m52zo4sxE11qhhjs2o1_1280.png" alt=""></img> 
            :character?.house === "House Bolton" ? <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/House-Bolton-Main-Shield.png" alt=""></img>
            :character?.house === "House Cerwyn" ? <img src="https://awoiaf.westeros.org/images/thumb/2/2c/House_Cerwyn.svg/1200px-House_Cerwyn.svg.png" alt=""></img>
            :character?.house === "House Reed" ? <img src="https://www.symbols.com/images/symbol/2823_house-reed.png" alt=""></img>
            :character?.house === "House Lannister" ? <img src="https://awoiaf.westeros.org/images/thumb/1/1e/House_Targaryen.svg/1200px-House_Targaryen.svg.png" alt=""></img>
            :character?.house === "House Manderly" ? <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9108eafe-35a1-414d-b42f-a3512c783765/d5v4pq2-3d30314e-cbd9-40f2-bb16-d01baabe139e.png/v1/fill/w_480,h_576,strp/manderly_sigil_by_varvara64_d5v4pq2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvOTEwOGVhZmUtMzVhMS00MTRkLWI0MmYtYTM1MTJjNzgzNzY1XC9kNXY0cHEyLTNkMzAzMTRlLWNiZDktNDBmMi1iYjE2LWQwMWJhYWJlMTM5ZS5wbmciLCJ3aWR0aCI6Ijw9NDgwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.aW_oWNgAtZesZrPPXJmmDt_kp8dthJbR3g6gc-jtOtc" alt=""></img>
            :character?.house === "House Glover" ? <img src="http://gobmush.wdfiles.com/local--files/house-arms/Arms_House-Glover.png" alt=""></img>
            :character?.house === "House Baratheon" ? <img src="https://throneslife.files.wordpress.com/2013/06/baratheon-sigil.png" alt=""></img>
            :character?.house === "House Tyrell" ? <img src="http://gobmush.wdfiles.com/local--files/house-arms/Arms_House-Tyrell.png" alt=""></img>
            :
            <img src={houses.logoURL} alt=""/> }                   
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