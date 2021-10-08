import {render} from '../../react-dom.js';

/**
 * 
 * @param {*} children and object or array with the children to be added as a component type
 * @param {*} container the container as HTML element.
 * @returns the rendered element
 */
function renderChildren(children, container){
    if(Array.isArray(children)) {
        return children.forEach(child=>render(child, container));
    }
    
    return render(children, container);
}

/**
 * 
 * @param {*} prop the properties as a JSON object
 * @param {*} value the value for each key in the object of properties
 * @param {*} element the element to attach the propertie
 */

function setEvents(element, event, callback){
    return element.addEventListener(event, callback);
}

function setProperties(prop, value, element){
    if(prop.startsWith("on")) {
        const event = prop.replace("on","").toLowerCase();
        return setEvents(element, event, value);
    }
    /** value will be the elemente as a component type */
    if(prop === "children")
        return renderChildren(value, element);
    
    /**
     * finally we add and attribute is there is one
     */
    const attribute = value;
    return element.setAttribute(prop, attribute);
}

/**
 * this funtion will create a HTML element 
 * according to the params passed in the function
 */

export function createElement(tag, props, content){
    const element = document.createElement(tag);/** aqui creamos la etiqueta */
    /**
     * if there is content we added to the element
     * it is only supported text as content.
     */
    if(content)
        element.textContent = content;
    /**
     * here we add the props or attributes to the element
     */
    Object.keys(props).forEach(prop => setProperties(prop, props[prop], element));
    return element;
}