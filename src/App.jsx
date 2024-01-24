import styled from 'styled-components';
import Cards from './components/cards/Cards.jsx';
import './App.css'
import Nav from './components/nav/Nav.jsx';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Home from './components/home/Home.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from './components/form/Form.jsx';
import Favorites from './components/faorites/Favorites.jsx';


  const Titulo = styled.h1`
    font-size: 5em;
    color: blue;
    text-align: center;
  `
 export const URL = 'https://rickandmortyapi.com/api/character/'

function App() {
  
  const [characters, setCharacters] = useState([]);

  const location = useLocation();
  const navigate = useNavigate()

  const [access, setAccess] = useState(false);

  const EMAIL = 'josedariorf@gmail.com';
  const PASSWORD = 'jose1234';

  // useEffect(()=>{
  //   !access && navigate('/');
  // }, [access]);

  function login(userData){
    if(userData.password === PASSWORD && userData.email === EMAIL){
      setAccess(true);
      navigate('/home');
    }
  }


  const onSearch = (id) => {
    fetch(`${URL}${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters([...characters, data]);
      });
  };

  const onClose = (id) => {
    const charactersFilter = characters.filter((character) => character.id !== id);
    setCharacters(charactersFilter);
  }

  return (
  <>
      <div className='App' >
        {location.pathname !== '/' ? <Nav onSearch={onSearch}/> : undefined}
        
        <Titulo>COLECCION RICK AND MORTY</Titulo>
        <Routes>
          <Route path='/' element={<Form login={login}/>}/>
          <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/favorites' element={<Favorites/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Routes>
      </div> 
      </>
  )
}

export default App
