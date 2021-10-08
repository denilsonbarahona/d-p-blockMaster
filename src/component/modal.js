import {Component, createElement} from '../lib/react/index.js';
import Wrapper from "./wrapper.js";
import CloseModal from './modal/modal-close/modal-close.js'; 
import ModalImg from './modal/modal-img/modal-img.js';
import ModalProfile from './modal/modal-profile/modal-profile.js';
import store from '../store.js';


class Modal extends Component {
    state = {}

    componentDidMount(){
        store.modalSuscribe(()=>{
            this.state = store.getState().popup            
            this.setState({ ...this.state })
        })
    }

    render(){
        const {vote_average, poster_path, title, overview,release_date } = this.state;            
        return  createElement("dialog",{
            id:"modal",
            class:"modal movie-detail",
            children:[
                new Wrapper([
                        createElement("div",{
                            class:"modal-content",
                            children:[
                                new CloseModal(),
                                new ModalImg({vote_average, poster_path}),
                                new ModalProfile({title, description: overview,
                                        year:new Date(release_date).getFullYear(), type:"drama/aventura", time:"1h 35m"}),
                            ]
                        })
                    ])
            ]
        })
    }
}

export default Modal;
