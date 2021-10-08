import {Component, createElement} from '../../../lib/react/index.js';
import Movie from '../../movie/movie.js';

class ModalImg extends Component {
    render(){
        const {vote_average, poster_path } = this.props;  
        return  createElement("div",{
            class:"modal-img",
            children:[ 
                new Movie({vote_average,poster_path}),
            ]
        })
    }
}

export default ModalImg;