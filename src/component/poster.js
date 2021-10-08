import {Component, createElement} from '../lib/react/index.js';
import PosterPage from './poster/poster-page.js';
import Bullet from "./poster/bullet.js";

class Poster extends Component {
    render(){
        return createElement("div", {
            class:"poster",
            children:[
                createElement("scroll-container", {
                    class:"poster-slider",
                    children:[
                        new PosterPage({id:"page1", img: "./src/statics/img/raya.png"}),
                        new PosterPage({id:"page2", img: "./src/statics/img/mulan.png"}),
                        new PosterPage({id:"page3", img: "./src/statics/img/unidos.png"})
                    ]
                }),
                createElement("div",{
                    class:"poster-bullet-list",
                    children:[
                        new Bullet({ref:"#page1"}),
                        new Bullet({ref:"#page2"}),
                        new Bullet({ref:"#page3"})
                    ]
                })
            ]
        } )
    }
}

export default Poster;
