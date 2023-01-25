import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState (props){
    const [state, setState] = React.useState({
        value: '',
        loading: false,
        err: false,
        confirmation: false,
        deleted: false
    })

    const onConfirmed = () => {
        setState({
            ...state,
            loading: false,
            err: false,
            confirmation: true
        })
    }

    const onError = () =>{
        setState({
            ...state,
            loading: false, 
            err: true
        })
    }
    const onWrite = (newValue) => {
        setState({
            ...state,
            value: newValue
        })
    }
    const onCheck = () =>{
        setState({
            ...state,
            loading: true
        })
    }
    const onDelete = () =>{
        setState({
            ...state,
            deleted: true
        })
    }
    const onReset = () => {
        setState({
            ...state,
            deleted: false,
            confirmation: false,
            value: ''
        })
    }


    React.useEffect(() => {

        if(state.loading){
            setTimeout(() => {

                if(state.value === SECURITY_CODE){  
                    onConfirmed()
                } else {
                    onError()
                }

            }, 2000)
        } 
    // eslint-disable-next-line  
    },[state.loading])

   if(!state.deleted && !state.confirmation) {
    return(
        <div>
                <h2>Hola clase</h2>
                <p>Eliminar {props.name}</p>
                {(state.err && !state.loading) && (
                <p>
                    Error: por lok
                </p>)}
                {(state.loading && 
                <p>
                    Cargando...
                </p>)}
                <input 
                    placeholder="Codigo" 
                    value={state.value}
                    onChange={(event) => {
                        onWrite(event.target.value)
                    }}    
                />
                <button 
                type="submit"
                onClick={() => { 
                    onCheck()
                }}
                >
                    Comprobar
                </button>
        </div>
    )} else if (state.confirmation && !state.deleted){
        return(
            <React.Fragment>
                <p>¿Quieres elminarlo?</p>
                <button
                    onClick={() => {
                        onDelete()
                    }}
                > SI</button>
                <button 
                    onClick={() => {
                        onReset()
                    }}
                > NO</button>
            </React.Fragment>
        )
    }else {
        return(
            <React.Fragment>
                <p>se elmino sin exito </p>
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