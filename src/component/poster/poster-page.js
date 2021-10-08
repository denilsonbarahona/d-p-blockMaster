import {Component, createElement} from '../../lib/react/index.js';

class PosterPage extends Component {
    render(){
        const {id, img} = this.props;
        return createElement("scroll-page",{
            id:id,
            class:"poster-page",
            children:[
                createElement("div",{
                    class:"poster-img",
                    children:[
                        createElement("img",{src:img,width:"328",height:"84",alt:"" })
                    ]
                }),
                createElement("div",{
                    class:"page-actions",
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
            ]
        })
    }
}

export default PosterPage;