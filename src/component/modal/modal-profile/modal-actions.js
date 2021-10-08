import {Component, createElement} from '../../../lib/react/index.js';
 
class ModalActions extends Component {
    render(){
        return createElement("div",{
            class:"modal-actions",
            children:[
                createElement("a",{
                    href:"#",
                    class:"button is-primary",
                    children:[
                        createElement("i",{
                            class:"icon-Property-1play"
                        })
                    ]
                },"ver ahora"),
                createElement("a",{
                    href:"#",
                    class:"button is-noPrimary",
                    children:[
                        createElement("i",{
                            class:"icon-Property-1plus"
                        })
                    ]
                },"VER DESPUÉS")
            ]
        }) 
    }
}

export default ModalActions;