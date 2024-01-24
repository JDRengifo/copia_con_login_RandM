import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../Redux/action';
import './Card.css'

function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
         removeFav(props.id)
      } else {
         setIsFav(true);
         addFav({
            id: props.id,
            name: props.name,
            status: props.status,
            gender: props.gender,
            species: props.species,
            origen: props.origen,
            image: props.image
         })
      }
   }
 
  //  useEffect(() => {
  //     myFavorites.forEach((fav) => {
  //        if (fav.id === props.id) {
  //           setIsFav(true);
  //        }
  //     });
  //  }, [myFavorites]);

   return(
      <div  className = "carta">
         <h2>key = {props.id}</h2>
          <button  className='botonEliminar' onClick={() => {props.onClose(props.id)}}>X</button>
          <h2 className='numeroDeCarta'>{props.id}</h2>
         <Link to={`/detail/${props.id}`}>
          <h2 className='nombre'>{props.name}</h2>
         </Link>
         {
          isFav ? (
            <button className='botonCorazon' onClick={handleFavorite}>❤️</button>
            ) : (
            <button className='botonCorazon' onClick={handleFavorite}>🤍</button>
            )
          }
          <h2 className='status'> {props.status}</h2>
          <h2 className='species'>{props.species}</h2>
          <h2 className='gender'>{props.gender}</h2>
          <h2 className='origen'> {props.origen}</h2>
          <img src={props.image} alt=''  margin = '10px'/>
         
      </div>
    
   );
}

const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites   };
};
export default connect(mapStateToProps, {addFav, removeFav})(Card);