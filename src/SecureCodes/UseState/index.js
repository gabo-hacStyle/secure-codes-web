import React from "react";
import '../Styles/styles.css'

//Estableciendo el código clave
const SECURITY_CODE = 'paradigma';

//Función principal
function UseState (props){
    //los estados iniciales y setState: un actualizador
    const [state, setState] = React.useState({
        value: '',
        loading: false,
        err: false,
        confirmation: false,
        deleted: false
    })
    //Funciones para que el codigo sea semideclarativo
    //Actualiza los estados para la pantalla de confirmación
    const onConfirmed = () => {
        setState({
            ...state,
            loading: false,
            err: false,
            confirmation: true
        })
    }
    //Actualiza los estados cuando se escribió mal la clave 
    const onError = () =>{
        setState({
            ...state,
            loading: false, 
            err: true
        })
    }
    //Actualiza el valor del input: lo que escribe el usuario
    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue
        })
    }
    //Actualiza los estados mientras valida la clave
    const onCheck = () =>{
        setState({
            ...state,
            loading: true
        })
    }
    //Actualiza los estados para la pantalla de eliminacion
    const onDelete = () =>{
        setState({
            ...state,
            deleted: true
        })
    }
    //Actualiza los estados para pantalla de restaurado
    const onReset = () => {
        setState({
            ...state,
            deleted: false,
            confirmation: false,
            value: ''
        })
    }

    //Effect: Para que se renderizen ciertos componentes 
    //unicamente en el estado de carga
    React.useEffect(() => {

        if(state.loading){
            //un timeout para simular un pedido al back-end
            setTimeout(() => {
                
                if(state.value === SECURITY_CODE){  
                //Sí la clave es correcta activa la función onConfirmed
                    onConfirmed()
                } else {
                //Sí la clave es incorrecta activa la función onError
                    onError()
                }

            }, 2000)
        } 
    // eslint-disable-next-line  
    },[state.loading])


    //Tres renders: 
    //El inicial
   if(!state.deleted && !state.confirmation) {
    return(
        <div className="state-container">
            <h2 className="state-title">Usando {props.name}</h2>
            <p>Semi declarativo compuesto. Usando
                el Hook useState, objetos y funciones
            </p>
                        
            {(state.err && !state.loading) && (
                <p>Error: clave incorrecta</p>
            )}
            {(state.loading && 
                <p>Cargando...</p>
            )}
            <input 
                className="state-input"
                placeholder="Codigo" 
                value={state.value}
                onChange={(event) => {
                    onWrite(event.target.value)
                }}    
            />
            <button 
                className="state-button--check"
                type="submit"
                onClick={() => { 
                    onCheck()
                }}
            >
            Comprobar
            </button>
        </div>
    )} // Render de confirmación. Estas seguro?
    else if (state.confirmation && !state.deleted){
        return(
            <React.Fragment>

                <p>¿Quieres elminarlo?</p>
                <button
                    onClick={() => {
                        onDelete()
                    }}
                >SI
                </button>
                <button 
                    onClick={() => {
                        onReset()
                    }}
                >NO
                </button>
            
            </React.Fragment>
        )
    }// Render de eliminado.
    else {
        return(
            <React.Fragment>
                <p>Se eliminó con éxito </p>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >
                Resetear
                </button>
            </React.Fragment> 
        )
    }
   }


export {UseState}