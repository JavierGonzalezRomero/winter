import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../Chronology/Chronology.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Chronology = () => {
  const [characters, setcharacters] = useState([]);
  const [ageOrder, setAgeOrder] = useState(false);
  const characterPrint = [];
  const charactersFilter = [];
  const [buttonText, setButtonText] = useState();
  

//Ageless Characters Removing//
  for (let character of characters) {
    if (character.age && character.age.age !== null && character.age.age !== undefined) {
      charactersFilter.push(character);
    }
  }


//Sort Method's//
  if (ageOrder === false) {
    
    charactersFilter.sort(
      (a, b) => (b.age.age) - (a.age.age)
    );
  } else {
    
    charactersFilter.sort(
      (a, b) => (a.age.age) - (b.age.age)
    );
  }


//Character's Print//
  for (let index = 0; index < charactersFilter.length; index++) {
    if (index % 1 === 0) {
      characterPrint.push(charactersFilter[index]);
    }
  }

//API Request//
  useEffect(() => {
          async function getData () {
              const {data} = await axios.get (`https://api.got.show/api/show/characters`)
              setcharacters(data)
          }getData()
      }, [])
      if (!characters) return null;
      

  return (
    <div>
     <Header></Header>
    <div className="b-container">
      <div>
            <button className="b-container__asc-dsc-button"onClick={() => {
                ageOrder === true ? setAgeOrder(false) : setAgeOrder(true); setButtonText(!buttonText)}}> {`${buttonText ? '↓' : '↑'}`}
              </button>        

              <div>
              {characterPrint.map((character) => {
                return (
                  <div className='b-container__character-cards'>                   
                      <p>{character.age.age}</p>
                      <p> {character.name} </p>
                      <img src={character.image} alt={character.name} className="b-container__image"/>
                    </div>
              )})}
            </div>
          </div>
    </div>
    <Footer></Footer>
    </div>

  )
}

export default Chronology