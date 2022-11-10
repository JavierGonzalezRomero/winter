import axios from 'axios'
import { useEffect,useState } from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './CharactersPage.scss';
import SimpleBarReact from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const CharactersPage = () => {

const [characterFiltro,setCharacterFiltro] = useState([])
const [busqueda, setBusqueda] = useState("")
const [characters, setCharacters] = useState([])
const navigate = useNavigate();

useEffect(() =>{
  async function getData(){
    const {data} = await axios.get("https://api.got.show/api/show/characters/")
    console.log("https://api.got.show/api/show/characters/")
    setCharacters(data)  
    setCharacterFiltro(data) 
    console.log(data)
       
    }getData()
},[])



 const handleChange = e =>{
  setBusqueda(e.target.value)
  filtrar(e.target.value)
 }
 const filtrar = (Busqueda) =>{
  let resultadoBusqueda = characterFiltro.filter((elemento)=>
  elemento.name.toString().toLowerCase().includes(Busqueda.toLowerCase())
  )
  setCharacters(resultadoBusqueda)
}


  return (
    <div className='Dad'>
        <Header></Header>

       <div className='Buscador'>

          <input className='form-control' value={busqueda} type="text"
          placeholder="Busqueda por nombre" onChange={handleChange}></input>       
          <button className='boton'>Buscar</button>
      </div>

       <button className='casa' onClick={() => navigate("/")}><img className='casalogo' src= "https://static.thenounproject.com/png/391821-200.png" alt=""></img></button>
       <SimpleBarReact style={{maxHeight:950}}>
      <div className='dady'>
      
      
        {characters.map((item,index) => {
          
          return (
            <>
            
             <div className='card' key = {index}>
                  
                <p className='text'>{item.name}</p>                       
                <Link to={`/characters/${item.name}`}>
                <img src={item.image} alt="" ></img></Link>
                </div>  
              
              </>
          );
          
        })}
       
        </div>
        </SimpleBarReact>
        <Footer></Footer>
    </div>
      
  )
}

export default CharactersPage