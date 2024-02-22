import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { addFav, removeFav } from '../../Redux/action';
import './Card.css'


function Card(props) {
   const {id, name, status, gender, species, origin, image} = props;
console.log(props)
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites)

   const [isFav, setIsFav] = useState(false);

<<<<<<< HEAD
   let char = {
      id,
      name,
      status,
      gender,
      species,
      image
=======
   const handleFavorite = ()=>{
      if (isFav) {
         setIsFav(false);
         removeFav(props.id)
      } else {
         setIsFav(true);
<<<<<<< HEAD
         addFav({
            id: props.id,
            name: props.name,
            status: props.status,
            gender: props.gender,
            species: props.species,
            origen: props.origen,
            image: props.image
         })
=======
         addFav(props.id)
>>>>>>> f5097545d476ba186e4c8efdc16081929137f66c
      }
>>>>>>> 84afd37e786e71224d84b5198d7a5c9773f9c901
   }
   
   const handleFavorite = ()=>{
       if (isFav) {
          setIsFav(false);
          dispatch(removeFav(id))
        } else {
           setIsFav(true);
           dispatch(addFav(char))
         }
      }
    
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return(
      <div  className = "carta">
         <h2>key = {id}</h2>
          <button  className='botonEliminar' onClick={() => {props.onClose(props.id)}}>X</button>
          <h2 className='numeroDeCarta'>{id}</h2>
         <Link to={`/detail/${id}`}>
          <h2 className='nombre'>{name}</h2>
         </Link>
         {
<<<<<<< HEAD
          isFav ? (
            <button className='botonCorazon' onClick={handleFavorite}>❤️</button>
            ) : (
            <button className='botonCorazon' onClick={handleFavorite}>🤍</button>
            )
          }
<<<<<<< HEAD
          <h2 className='status'> {status}</h2>
          <h2 className='species'>{species}</h2>
          <h2 className='gender'>{gender}</h2>
          <h2 className='origen'> {origin}</h2>
          <img src={image} alt=''  margin = '10px'/>
=======
=======
   isFav ? (
      <button onClick={handleFavorite}>❤️</button>
   ) : (
      <button onClick={handleFavorite}>🤍</button>
   )
}
>>>>>>> f5097545d476ba186e4c8efdc16081929137f66c
          <h2 className='status'> {props.status}</h2>
          <h2 className='species'>{props.species}</h2>
          <h2 className='gender'>{props.gender}</h2>
          <h2 className='origen'> {props.origen}</h2>
          {/* <img src={props.image} alt=''  margin = '10px'/> */}
>>>>>>> 84afd37e786e71224d84b5198d7a5c9773f9c901
         
      </div>
    
   );
}

export default Card;
// const mapStateToProps = (state) => {
//    return {
//       favorites: state.myFavorites   };
// };
// export default connect(mapStateToProps, {addFav, removeFav})(Card);