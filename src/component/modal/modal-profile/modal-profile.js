import {Component, createElement} from '../../../lib/react/index.js';
import ModalTags from './modal-tags.js';
import ModalActions from './modal-actions.js';

class ModalProfile extends Component {
    render(){
        const {title,description,year,type,time} = this.props;
        return  createElement("div",{
            class:"modal-profile",
            children:[
                createElement("h1",{class:"title"},title),
                createElement("h1",{class:"description"},description),
                new ModalTags({year:year, type:type, time:time}),
                new ModalActions(),
            ]
        })
    }
}

export default ModalProfile;