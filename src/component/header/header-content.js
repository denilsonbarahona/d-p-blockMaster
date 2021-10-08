import {Component, createElement} from '../../lib/react/index.js';
import HeaderLogo from './header-logo.js';
import HeaderMenu from './header-menu.js';
import MovileMenu from './movile/movile-menu.js';
import CloseMenu from './movile/close-menu.js';
import Search from './search-header.js';
import HeaderActions from './movile/header-actions.js';

class HeaderContent extends Component {
    render(){
        return createElement("header",{
            "aria-label":"main-header", 
            "class":"header",
            children: [
                new HeaderLogo(),
                new HeaderMenu(),
                new MovileMenu(),
                new CloseMenu(),
                new Search(),
                new HeaderActions(),
            ]
        })
    }
}

export default HeaderContent;