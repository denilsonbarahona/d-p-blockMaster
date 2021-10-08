import {Component, createElement} from '../../../lib/react/index.js';


class CloseMenu extends Component {

    HandleClickClose=()=>{
        const $menu = document.querySelector(".movile-menu");
        $menu.style.display="none";
        close_menu.style.display="none";
    }

    render(){
        return createElement("div",{ 
            "class":"header-menu-close",
            id:"close_menu",
            onClick:this.HandleClickClose,
            children: [
                createElement("a",{
                    href:"#",
                    role:"button",                    
                    title:"cerar menu",
                    class:"button",
                    children:[
                        createElement("i",{
                            class:"icon-Property-1delete",
                            "aria-hidden":"true"
                        })
                    ]
                })
            ]
        })
    }
}

export default CloseMenu;