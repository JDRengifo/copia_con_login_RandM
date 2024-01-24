import {ADD_FAV, REMOVE_FAV} from "./actions-types";


export const addFav = (payload) => {
    return {
        type: ADD_FAV,
        payload: payload
      //payload    <-- por ES6 si la propiedad es igual al valor se puede solo colocar 
                    //la propiedad y el valor se sobreentiende que es el mismo
    };
};

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    };
};