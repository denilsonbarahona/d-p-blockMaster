import {Component, createElement} from '../lib/react/index.js';
import Wrapper from "./wrapper.js";
import HeaderContent from "./header/header-content.js";

class Header extends Component {
    render(){
        return createElement("section",
        {
            "aria-label":"header",
            children:[
                new Wrapper([
                    new HeaderContent(),
                ])
            ]
        })
    }
}

export default Header;
