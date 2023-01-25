import React from "react";

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            err: true
        }
    }

    render(){
        return(
            <div>
                <h2>Hola clase</h2>
                <p>Eliminar {this.props.name}</p>
                {(this.state.err && 
                <p>
                    Error: por lok
                </p>)}
                <input placeholder="Codigo" />
                <button 
                type="submit"
                onClick={() => this.setState({err: !this.state.err})}
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState}