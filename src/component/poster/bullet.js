import {Component, createElement} from '../../lib/react/index.js';

class Bullet extends Component {
    render(){
        const {ref} = this.props;
        return createElement("a",{
            href:ref,
            class:"page-bullet" 
        })
    }
}

export default Bullet;