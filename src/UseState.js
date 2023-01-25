import React from "react";

function UseState (props){
    const [err, setErr] = React.useState(true);
    return(
        <div>
                <h2>Hola clase</h2>
                <p>Eliminar {props.name}</p>
                {(err && 
                <p>
                    Error: por lok
                </p>)}
                <input placeholder="Codigo " />
                <button 
                type="submit"
                onClick={() => setErr(!err)}
                >
                    Comprobar
                </button>
        </div>
    )
}  

export {UseState}