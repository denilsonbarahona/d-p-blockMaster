export const SHOW_POPUP = 'SHOW_POPUP';
export const ADD_MOVIE = 'ADD_MOVIE';
export const FILTER_MOVIE ="FILTER_MOVIE";
export const SEARCH_MOVIE = "SEACH_MOVIE";

export const ShowPopUP = (payload)=>({
    type: SHOW_POPUP,
    payload: payload
});

export const AddMovies = (payload)=>({
    type: ADD_MOVIE,
    payload: payload
});

export const FilterMovie = (payload)=>({
    type: FILTER_MOVIE, 
    payload: payload
})

export const SearchMovie = (payload)=>({
    type: SEARCH_MOVIE,
    payload: payload
})