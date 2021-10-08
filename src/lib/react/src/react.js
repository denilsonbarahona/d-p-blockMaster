/**
 * this is an abstrac class needed to create
 * elements to be displayed in the DOM
 */
class Component {
    /**this is the construcor
     * setting the state and props of each element
     */
    constructor(props={}, state={}){
        this.props = props;
        this.state = state;
    }

    /**
     * we will call this function before mount our component
     * inside the element container
     */
    componentWillMount(){}
    /**
     * this function is calle after the append of the compoent
     * inside the container
     * it is called in the render function of react dom
     */
    componentDidMount(){}
    /**
     * we will be calling this function after reRender the element
     * component
     */
    componentDidUpdate(){}
    /**
     * this function will be reSetted in the render function
     * reSetted with the custom definition for each component
     */
    update(){}
    /**
     * a private function that will call the update function
     * of each component
     */
    #updater(){
        this.update(this.render());
        this.componentDidUpdate();
    }

    /**
     * the setState Function will be extended from this class
     * to each element
     */
    setState(newState) {
        this.state = {
            ...this.state,
            ...newState }
        this.#updater();
    }
    /**
     * the build function will return what we define in the render function
     */
    build(){
        this.componentWillMount();
        return this.render();
    }
}


export {Component};