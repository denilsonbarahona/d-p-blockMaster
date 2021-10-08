import { SHOW_POPUP, ADD_MOVIE, FILTER_MOVIE, SEARCH_MOVIE } from "../actions/index.js";
import * as Normalize from '../normalize.js';


const searchMovie=(query, list, allIds)=>{
    if(isNaN(query) || query ===""){
        return FilterByTitle(query, list);
    }
    return filterById(query, allIds);
}

const FilterByTitle=(title, movies)=>{
    const list = []
    movies.forEach(movie=>{
        if(movie.title.toLowerCase().includes(title.toLowerCase())){
            list.push(movie.id);
        }
    })

    return list;
}


const filterById=(id, allIds)=>{
    const parseId = parseInt(id, 10);
    if(allIds.includes(parseId)) {
        return [parseId];
    }

    return allIds;
}

const reducer = (state, action)=>{
    switch(action.type){
        case SHOW_POPUP:   
            return {
                ...state,
                popup:{...action.payload },
            }
        case ADD_MOVIE: 
             { 
                const movieList = Normalize.MovieListAsMap(action.payload, state.movieList);
                const all = Normalize.getAllIds(action.payload, state.list.all);
                const mostValued = Normalize.getMostValuedIds(action.payload, state.list.mostValued);
                const leastValued = Normalize.getLeastValuedIds(action.payload, state.list.leastValued);
                return {
                    ...state, 
                    movieList,
                    list:{ ...state.list, all, leastValued, mostValued }
                }
            }
        case FILTER_MOVIE:
            {
                return {
                    ...state,
                    filter: action.payload
                }
            }
        case SEARCH_MOVIE:
            return {
                ...state ,
                filter: "search",
                list: {
                    ...state.list, 
                    search: searchMovie(action.payload, state.movieList, state.list.all),
                }
            }
        default: return state;
    }
}

export default reducer;
