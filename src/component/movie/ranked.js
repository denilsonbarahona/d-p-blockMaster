import {Component, createElement} from '../../lib/react/index.js';

class Ranked extends Component {
    render(){ 
        const {vote_average} = this.props;
        return createElement("div",{
            class:`ranked ${vote_average>7?"isMostValued":" isLeastValued"}`,
            children:[
                createElement("div",{
                    class:"ranked-content",
                    children:[
                        createElement("i",{
                            class:"icon-Property-1star"
                        }),
                        createElement("p",{
                            class:"ranked-score"
                        }, vote_average)
                    ]
                })
            ]
        }) 
    }
}

export default Ranked;