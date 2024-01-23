import React, { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom";
import './detail.css'

function Detail(){
  const {id} = useParams();
  const [character, setCharacter] = useState({});
    
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      
      console.log(data)
      console.log(data.name)
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
        }
    }
  );
  return setCharacter({});
}, [id]);
                    
return(
<div className="detailDiv">
  <div className="detailDatos">
  <h3>Datos de la tarjeta nro. {id}</h3>
       <h3>{character.name}</h3>
       <h3> {character.status}</h3>
       <h3>{character.species}</h3>
       <h3>{character.gender}</h3>
       <h3> {character.origen}</h3>
   </div>
   <div className="detailImagen">
     <img src={character.image} alt=''  margin = '10px'/>
   </div>
</div>
 )
};
export default Detail