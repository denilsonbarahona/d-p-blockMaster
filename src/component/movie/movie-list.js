import {Component, createElement} from '../../lib/react/index.js';
import Movie from './movie.js'; 
import store from '../../store.js';
import api from "../../api.js";
import {AddMovies} from '../../actions/index.js';

class MovieList extends Component {

    state = { page: 1 }

    getPage = async(page)=>{
        const {results} = await api.moviePage(page);
        store.dispatch(AddMovies(results));
    }
    
    HandleIntersector=(entries)=>{ 
         if(entries[0].isIntersecting && store.getState().filter !== "search"){
            loader.style.display="block";
             this.setState({ page: this.state.page + 1, })
             this.getPage(this.state.page +1);
         }
    }

    componentDidMount(){
        const interElement = window.intersector;
        this.getPage(this.state.page);
        store.suscriber(()=>{
            this.setState();
            loader.style.display="none"
        })
        const observer = new IntersectionObserver(this.HandleIntersector)
        observer.observe(interElement);
    }

    
    render(){ 
        
        function displayTitle(display){ 
            if(window.title)
                window.title.style.display=display;
        }
    
        const MoviesFounded=()=>{
            intersector.style.display ="inline-block";
            displayTitle("inline-block");
            return createElement("div",{
                class:"movie-list",
                children: moviesIdList.map(id=>new Movie(movieList.get(id)))
            })
        }
    
        function NotFoundedMovies(){
            intersector.style.display ="none";
            displayTitle("none");
            return createElement("div",{
                class:"not-founded",
                children: [
                    createElement("div",{
                        class:"not-founded__img",
                        children: [
                            createElement("img",{
                                src:"./src/statics/img/notFound.png"
                            })
                        ]
                    }),
                    createElement("p",{},"No hemos encontrado la película")
                ]
            })
        }


        const state = store.getState();  
        const moviesIdList = state.list[state.filter];
        const movieList = state.movieList;

        if(moviesIdList.length) {
            return MoviesFounded();
        } 

        return NotFoundedMovies();
    }
}

export default MovieList;
