import {Component, createElement} from '../../lib/react/index.js';
import {FilterMovie} from '../../actions/index.js';
import store from '../../store.js';

class HeaderMenu extends Component {

    HandleMenuClick=(event)=>{
        const $selected = document.querySelector(".header-menu .is-selected");
        $selected.classList.remove("is-selected");
        event.target.classList.add("is-selected");
        store.dispatch(FilterMovie(event.target.dataset.value));
    }

    render(){
        return createElement("div",{
                    class:"header-menu",
                    children:[
                        createElement("div",{
                            href:"#",
                            "data-value":"all",
                            role:"button", 
                            onClick: this.HandleMenuClick,
                            title:"buscar todas las peliculas", 
                            class:"button is-selected" 
                        },"Todas"),
                        createElement("div",{
                            href:"#",
                            role:"button", 
                            onClick: this.HandleMenuClick,
                            "data-value":"mostValued",
                            title:"buscar todas las peliculas", 
                            class:"button" 
                        },"Más valoradas"),
                        createElement("div",{
                            href:"#",
                            role:"button", 
                            "data-value":"leastValued",
                            onClick: this.HandleMenuClick,
                            title:"buscar todas las peliculas", 
                            class:"button" 
                        },"Menos valoradas")
                    ],
                }) 
    }
}

export default HeaderMenu;