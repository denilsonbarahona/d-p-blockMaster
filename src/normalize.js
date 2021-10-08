/*here we normalize the data recived from the API. */

/*
this is the main function, that normalize the main data as a MAP
the data here will be access by a key that will be the code of each movie
*/
function MovieListAsMap(newList =[], oldList = new Map()){    
    
    return newList.reduce((list, movie)=>{
        list.set(movie.id, movie);
        return list;
    }, oldList);
}

/** get all the id of movies */
function getAllIds(list, oldList = []){
    return oldList.concat(list.map(movie=>movie.id));
}

/**gets the ids of the most valueated movies */
function getMostValuedIds(newList, oldList = []) {
    return newList.reduce((list, movie)=>{
        if(movie.vote_average>7){
            list.push(movie.id);
        }
        return list;
    }, oldList);
}

/** get ths id of the least valuated movies */
function getLeastValuedIds(newList, oldList=[]){
    return newList.reduce((list, movie)=>{
        if(movie.vote_average <=7){
            list.push(movie.id);
        }
        return list;
    }, oldList);
}


export {
    MovieListAsMap,
    getAllIds,
    getMostValuedIds,
    getLeastValuedIds,
}