import {Component, createElement} from '../../../lib/react/index.js';


class HeaderActions extends Component {

    HandleCliCkMenu=()=>{
        const $menu = document.querySelector(".movile-menu");
        $menu.style.display="flex";
        close_menu.style.display="inline-block";
    }

    HandleSeachActionMovile=()=>{ 
        const $search = document.querySelector(".header-search"); 
        const $logo = document.querySelector(".header-logo"); 
        const $actions = document.querySelector(".header-actions"); 
        
        $actions.style.display="none";
        $logo.style.display="none";
        $search.style.display="flex";     
    }

    render(){
        return createElement("div",{ 
            "class":"header-actions",
            children: [
                createElement("a",{
                    href:"#",
                    role:"button",
                    title:"buscar pelicula",
                    onClick:this.HandleSeachActionMovile,
                    class:"button",
                    children:[
                        createElement("i",{
                            class:"icon-Property-1search",
                            "aria-hidden":"true"
                        })
                    ]
                }),
                createElement("a",{
                    href:"#",
                    role:"button",
                    onClick: this.HandleCliCkMenu,
                    title:"mostar menú",
                    id:"hamburger-button",
                    class:"button",                    
                    children:[
                        createElement("i",{
                            class:"icon-Property-1menu",
                            "aria-hidden":"true"
                        })
                    ]
                })
            ]
        })
    }
}

export default HeaderActions;