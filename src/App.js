import './App.css';
import { Link, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CharactersPage from './pages/CharactersPage/CharactersPage';
import HomePage from './pages/HomePage/HomePage'
import CharacterDetail from './pages/CharacterDetail/CharacterDetail'
import { useTranslation, withTranslation, Trans } from 'react-i18next';

function App() {
  return (

    <div className="App">
    
    
    <Router>
      <Routes>
      <Route path = "/" element ={<HomePage></HomePage>}/>
      <Route path = "/characters" element ={<CharactersPage></CharactersPage>}/>
      <Route path = "/characters/:nameCharacter" element ={<CharacterDetail></CharacterDetail>}/>


      </Routes>
    </Router>
    
      
    </div>
  );
}

export default App;
