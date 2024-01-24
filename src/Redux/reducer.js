import { ADD_FAV, REMOVE_FAV } from "./actions-types";

//Acá va el estado inicial del store
const initialState = {
    myFavorites: [],
}

const reducer = (state = initialState, action)=>{
// const reducer = (state = initialState, {type, payload})
    switch (action.type) {
        case ADD_FAV:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
               // myFavorites: [...state.myFavorites, payload] <--esto va con la linea 9

               //tambien se podria con concat
               //myFavorites: state.myFavorites.concat(payload)
               
               // O tambien con el push
               //myFavorites: state.myFavorites.push(payload)
            }
            case REMOVE_FAV:
                const filtrados = state.myFavorites.filter((item)=>item.id !== payload);
                return {
                    // spread operator
                    ...state,
                    myFavorites: filtrados
                }
                //también podriamos ponerlo así:
    //          case REMOVE_FAV:
    //              return {
    //                  ...state,
    //                  myFavorites: state.myFavorites.filter((item)=>item.id !== payload); 
    //               }

            default:
               return state;
    }
}

export default reducer;