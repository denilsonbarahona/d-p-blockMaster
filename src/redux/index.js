/**
 * el store de va a encarga de administrar las funciones que afectan el estado
 * de la pagina web
 * 
 */

const createStore = (reducer, initialState)=>{
    /*
    inicializa el state de la aplicación con valores iniciales.
    */
    let state = initialState;
    let updater=()=>{};
    let modal=()=>{};
    let route=()=>{};
    /**función que nos permitira retornar el state de la aplicación
     * y acceder de los datos
     */
    const getState=()=>state;
    /**
     * this is the function that will allow us to dispatch acction to the 
     * reducer.
     */
    const dispatch=(action)=>{
        state = reducer(state, action);
        updater();
        modal();     
        route();   
    }
    /**this will allow us to
     * recibe the response of the reducer.
    */
    const suscriber=(listener)=>{        
        updater= listener;
    }

    const modalSuscribe=(lister)=>{
        modal = lister;
    }

    const routeSuscribe=(listener)=>{
        route = listener;
    }

    return {getState, dispatch, suscriber, modalSuscribe, routeSuscribe}
}

export {
    createStore
}