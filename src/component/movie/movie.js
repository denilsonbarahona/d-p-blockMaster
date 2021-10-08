import {Component, createElement} from '../../lib/react/index.js';
import Ranked from './ranked.js';
import MovieImg from './movie-img.js';
import {ShowPopUP} from '../../actions/index.js';
import store from '../../store.js';

class Movie extends Component {

    HandleMovieClick=()=>{
        store.dispatch(ShowPopUP({...this.props}));
        const $modal = document.querySelector("#modal");
        $modal.showModal();
    }

    render(){
        const {poster_path, vote_average} = this.props;
        return createElement("div",
        {
            class:"movie",
            onClick:this.HandleMovieClick,
            children:[ 
                new Ranked({vote_average}),
                new MovieImg({poster_path})
            ]
        })
    }
}

export default Movie;
