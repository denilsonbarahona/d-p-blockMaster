import {Component, createElement} from '../../../lib/react/index.js';
 
class ModalTags extends Component {
    render(){
        const {year, type, time} = this.props
        return  createElement("p",{
            children:[
                createElement("span",{},year),
                createElement("span",{},type),
                createElement("span",{},time),
            ]
        })
    }
}

export default ModalTags;