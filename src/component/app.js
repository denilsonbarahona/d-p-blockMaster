import {Component, createElement} from '../lib/react/index.js';
import Header from '../component/header.js';
import Poster from '../component/poster.js';
import Main from "../component/main.js";
import Modal from "./modal.js"

class App extends Component {
    render(){
        return createElement("div",{
            children: [ 
                new Header(),
                new Poster(),
                new Main(),
                new Modal(),
            ]
        })
    }
}


export default App;