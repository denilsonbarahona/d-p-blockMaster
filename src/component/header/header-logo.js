import {Component, createElement} from '../../lib/react/index.js';
 
class HeaderLogo extends Component {
    render(){
        return createElement("div",{
            class:"header-logo",
            children:[
                createElement("img",{
                    src:"./src/statics/img/logo-blockBuster.png",
                    width:"66", 
                    height:"40",
                    alt:"logo de bloc master"}),
            ]
        })
    }
}

export default HeaderLogo;