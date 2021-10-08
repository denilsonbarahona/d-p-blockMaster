import {Component, createElement} from '../../../lib/react/index.js';
 
class CloseModal extends Component {

    HandleCloseModal=()=>{
        const $modal = document.querySelector("#modal");
        $modal.close();
    }

    render(){
        return  createElement("div",{
            class:"modal-close",
            children:[ 
                createElement("button",{
                    role:"button",
                    id:"close-modal",
                    title:"cerar popup",
                    onClick:this.HandleCloseModal,
                    class:"button",
                    children:[
                        createElement("i",{class:"icon-Property-1delete", "aria-hidden":"true"})
                    ]
                })
            ]
        })
    }
}

export default CloseModal;