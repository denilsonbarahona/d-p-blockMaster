import {Component, createElement} from '../lib/react/index.js';
import Wrapper from "./wrapper.js";
import MovieList from "./movie/movie-list.js";
import store from "../store.js";

class Main extends Component {

    render(){
        return createElement("section",
        {
            "aria-label":"Banner principal",
            class:"main",
            children: [new Wrapper([                    
                createElement("h1",{class:"main-title", id:"title" },"Todas las peliculas"),
                new MovieList(),
                createElement("div",{class:"loader", id:"loader"}),
            ])]
        })
    }
}

export default Main;
