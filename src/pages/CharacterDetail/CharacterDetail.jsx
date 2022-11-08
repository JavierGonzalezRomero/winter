import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";



const CharacterDetail = () => {

  const { nameCharacter } = useParams();
  const [character, setCharacter] = useState([]); 
  const [houses,setHouses] = useState([])

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
    
    <div>
      <div>        
        <p>{character?.name}</p>
        <img src={character?.image} alt="" /> 
        <h1>Casa</h1>
        <p>{character?.house}</p>
        {houses.map((item,index) => {
          return (
            <div className='card' key = {index}>
             <img src={item.logoURL} alt=""/>                        
            </div>
          );
        })}

        <img src={houses.logoURL} alt=""/>         
        
        <h1>Alianzas</h1>

        {character.allegiances.map((item,index) => {
          return (
            <div className='card' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })}

        
        <h1>Aparaciones</h1> 
        
        {character.appearances.map((item,index) => {
          return (
            <div className='card' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })}
        
        <h1>Padre</h1>
        <p>{character?.father}</p>

        <h1>Descendientes</h1>

        {character.siblings.map((item,index) => {
          return (
            <div className='card' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })}      
        
      
        <h1>Titulos</h1>

        {character.titles.map((item,index) => {
          return (
            <div className='card' key = {index}>
             <p>{item}</p>                       
            </div>
          );
        })} 
        
      </div>
      <button onClick={() => navigate("/characters")}>Go back</button>
    </div>
  )
}

export default CharacterDetail