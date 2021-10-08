import {Component, createElement} from '../../lib/react/index.js';

class MovieImg extends Component {
    render(){ 
        const {poster_path} = this.props;
        return createElement("div",{
            class:"movie-img",
            children:[
                createElement("img",{
                    src:`//image.tmdb.org/t/p/w220_and_h330_face${poster_path}`,
                    width:"80",
                    height:"120",
                    alt:""
                })
            ]
        }) 
    }
}

export default MovieImg;