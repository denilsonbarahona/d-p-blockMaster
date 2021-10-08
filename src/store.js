/**
 * en el store inicializamos el state de la aplicación
 */

import{createStore} from './redux/index.js';
import reducer from './reducers/index.js';
import {MovieListAsMap, getAllIds, getMostValuedIds, getLeastValuedIds} from './normalize.js';

const initialState={
    movieList:MovieListAsMap([]),
    filter:"all",
    list:{
        all:getAllIds([]),
        mostValued: getMostValuedIds([]),
        leastValued: getLeastValuedIds([]),
    },
    popup:{ 
        score:1, 
        img:"./src/statics/img/Hard-Kill.png", 
        title:"Infamous", description:"Arielle nació en un pueblo pequeño, pero sueña con ser famosa. Tras conocer a Dean, un delincuente, la pareja empieza a asaltar negocios y presumir de sus fechorías en las redes sociales, en busca de una notoriedad manchada de sangre.",
        year:"2020", type:"Suspenso/Crimen", time:"1hr:45min"
    }
}

const store = createStore(reducer, initialState);

export default store;