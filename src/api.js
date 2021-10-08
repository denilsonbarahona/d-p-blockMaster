import {API_KEY} from './constant.js';

/*
Handle the conextion with the API 
*/

class API {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
    }
    /*is the base of the URL where we will make our requests */
    baseAPI = 'https://api.themoviedb.org/3/';

    get discoverMovie(){
        return `${this.baseAPI}discover/movie?api_key=${this.API_KEY}`; 
    }

    /*
        this method will allow us to get more movies from the API 
    */
    async moviePage(page){
        const response = await fetch (`${this.discoverMovie}&page=${page}`);
        const data = await response.json();
        return data;
    }
}

export default new API(API_KEY);