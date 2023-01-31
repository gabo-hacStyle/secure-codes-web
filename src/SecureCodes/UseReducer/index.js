import React from "react";
import '../Styles/styles.css'

const SECURITY_CODE = 'paradigma';

function UseReducer (props){
    //useReducer:
    const [state, dispatch] = React.useReducer(reducer, initialState);
    
    //Para que se renderizen ciertos componentes 
    //unicamente en el estado de carga
    React.useEffect(() => {

        if(state.loading){
            setTimeout(() => {

                if(state.value === SECURITY_CODE){  
                    dispatch({type: actionTypes.confirm})
                } else {
                    dispatch({type: actionTypes.err})
                }

            }, 2000)
        } 
    // eslint-disable-next-line  
    },[state.loading])


    //Tres diferentes pantallas que van a aparecer
    //Dependiendo de la interacción del user
    //La inicial
   if(!state.deleted && !state.confirmation) {
    return(
        <div className="state-container">
            <h2 className="state-title">Usando {props.name}</h2>
            <p>Declarativo compuesto usando actionTypes y React Hook useReducer</p>
            
            {(state.err && !state.loading) && (
                <p>Error: Clave incorrecta</p>
            )}
            
            {(state.loading && 
                <p>Cargando...</p>
            )}
            
            <input 
                className="state-input"
                placeholder="Codigo" 
                value={state.value}
                onChange={(event) => {
                    dispatch({type: actionTypes.write, payload: event.target.value})
                }}    
            />
            <button className="state-button--check" 
                type="submit"
                onClick={() => { 
                    dispatch({type: actionTypes.check})
                }}
            >
            Comprobar
            </button>
        
        </div>
    )
    } //Pantalla de confirmación: estas seguro? 
    else if (state.confirmation && !state.deleted){
        return(
            <React.Fragment>
                <p>¿Quieres elminarlo?</p>

                <button
                    onClick={() => {
                        dispatch({type: actionTypes.delete})
                    }}
                > 
                SI
                </button>
                <button 
                    onClick={() => {
                        dispatch({type: actionTypes.reset})
                    }}
                > 
                NO
                </button>
            </React.Fragment>
        )
    }//Pantalla de eliminación 
    else {
        return(
            <React.Fragment>
                <p>Se elmino con exito </p>
                <button
                    onClick={() => {
                        dispatch({type: actionTypes.reset})  
                    }}
                >
                Resetear
                </button>
            </React.Fragment> 
        )
    }
}

//Los estados iniciales (primer argumento de useReducer)
const initialState = {
    value: '',
    err: false,
    loading: false,
    confirmation: false, 
    deleted: false
}

//Para llamar la variable y evitar typos
const actionTypes = {
    err: 'ERROR',
    check: 'CHECK',
    confirm: 'CONFIRM',
    reset: 'RESET',
    delete: 'DELETE',
    write: 'WRITE'
}
//Reducer especificando los cambios de los estados 
const reducer = (state, action) =>{
    switch (action.type) {
        case actionTypes.err:
            return {
                ...state,
                err: true,
                loading: false
            };
        case actionTypes.check:
            return {
                ...state,
                loading: true
            };
        case actionTypes.confirm:
            return {
                ...state,
                loading: false,
                err: false,
                confirmation: true
            };
        case actionTypes.reset:
            return{
               ...state,
                deleted: false,
                confirmation: false,
                value: ''
            };
        case actionTypes.delete:
            return{
                ...state,
                deleted: true
            };
        case actionTypes.write: 
            return {
                ...state,
                value: action.payload
            };
        default:
            return {
                ...state
            };
    }
}

export { UseReducer }