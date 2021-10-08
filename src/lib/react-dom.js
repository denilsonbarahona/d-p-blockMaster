/*
    tarea princial, renderizar elementos html en el dom , tambien renderizar los cambios hechos en el dom.
*/

function render (element, container) {
    if(typeof element === "string" || element instanceof Element){
        return container.append(element);
    }
    /******with this inner function
     * we reRender each Element in the DOM when it changes     
     */
    function reRender(newChild) {
        container.replaceChild(newChild, child);
        child = newChild;
    }
    /*reRender will be called inside the update function
    in each component element.
    */
    element.update = reRender;
    /**
     * the build function will return the html component to be rendered
     */
    let child = element.build();
    container.append(child)
    /**
     * this function will be trigger 
     * when the element had been appendend in the container
     */
    element.componentDidMount();
}

export {
    render
}