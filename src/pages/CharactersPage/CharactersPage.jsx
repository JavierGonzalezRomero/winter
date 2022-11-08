import axios from 'axios'
import { useEffect,useState } from 'react'
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

<input className='form-control' value={busqueda} type="text"
   placeholder="Busqueda por nombre o Id" onChange={handleChange}></input>
   <button className='boton'>Buscar</button> <button onClick={() => navigate("/")}>Go back</button>
    

        {characters.map((item,index) => {
          return (
            <div className='card' key = {index}>
                          
              <p>{item.name}</p>                       
              <Link to={`/characters/${item.name}`}><img src={item.image} alt="" /></Link>
              
            </div>
          );
        })}
      </div>
  )
}

export default CharactersPage