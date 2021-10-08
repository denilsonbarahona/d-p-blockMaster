import {Component, createElement} from '../../lib/react/index.js';
import {SearchMovie, FilterMovie} from '../../actions/index.js';
import store from '../../store.js';

class Search extends Component {

    HandleSubmitForm=(event)=>{
        event.preventDefault(); 
        const formData = new FormData(event.target);
        const query = formData.get("search");
        if(query){ 
            return store.dispatch(SearchMovie(query));
        }
        return store.dispatch(FilterMovie("all"));
    }

    HandleVisibilityLogo=()=>{
        const $logo = document.querySelector(".header-logo");         
        $logo.style.display="inline-block";        
    }

    HandleVisibilityActions=()=>{
        const $actions = document.querySelector(".header-actions");             
        $actions.style.display="inline-block";       
    }

    HandleVisibilitySearchState=(visibility)=>{
        const $search = document.querySelector(".header-search"); 
        $search.style.display=visibility  
    }

    HandleBackFromSearch=()=>{
        this.HandleVisibilityLogo();
        this.HandleVisibilityActions();
        this.HandleVisibilitySearchState("none");
    }

    HandleSetVisibleSearch=(e)=>{
       if(e.matches){
        this.HandleVisibilityLogo();
         return this.HandleVisibilitySearchState("flex");
       }
       this.HandleVisibilityActions();
       return this.HandleVisibilitySearchState("none");
    }

    render(){

        const media = window.matchMedia("(min-width: 1024px)");
        media.onchange = this.HandleSetVisibleSearch;


        return createElement("div",{
             class:"header-search",
             children:[
                 createElement("a",{
                    href:"#",
                    role:"button",
                    title:"regresar a la pagina princial",
                    class:"button back-action",
                    onClick: this.HandleBackFromSearch,
                    children:[
                        createElement("i",{
                            class:"icon-Property-1back",
                            "aria-hidden":"true",
                            children:[],
                        })
                    ],
                 }),

                 createElement("form",{
                    action:"",
                    "aria-label":"busqueda de peliculas por código o nombre", 
                    class:"header-form",
                    onSubmit: this.HandleSubmitForm,
                    children:[
                        createElement("input",{
                            type:"search", 
                            name:"search",
                            placeholder:"Busca tu pelicula favorita"
                        }),
                        createElement("button",{ 
                            title:"buscar pelicula", 
                            class:"button is-icon",
                            children:[
                                createElement("i",{
                                    class:"icon-Property-1search", 
                                    "aria-hidden":"true"
                                })
                            ]
                        })

                    ]
                 })
             ]
        })
    }
}

export default Search;
