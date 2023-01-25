import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            err: false,
            value: '',
            loading: false
        }
    }

   /* componentDidMount(){
        console.log('Component did mount')
    }
    UNSAFE_componentWillMount(){
        console.log('Component will mount')
    }*/

    //Ciclo de vida donde se actualiza
    componentDidUpdate() {
        console.log('Actualizo')

        if(this.state.loading){
            setTimeout(() => {
                if (SECURITY_CODE === this.state.value){
                    this.setState({err: false, loading:false})
                } else {
                    this.setState( {err: true, loading: false})
                }
            }, 2000)
    }
}   

    render(){
        const {err, loading, value} = this.state;
        return(
            <div>
                <h2>Hola clase</h2>
                <p>Eliminar {this.props.name}</p>
                {(err && !loading) && ( 
                <p>
                    Error: por lok
                </p>)}
                {(loading && 
                
                    <Loading /> 
                )}
                <input
                    value={value}
                    onChange={(event) => {
                        this.setState({value: event.target.value})
                    }}
                    placeholder="Codigo" 
                />
                <button 
                type="submit"
                onClick={() => this.setState({loading: true})}
                >Comprobar</button>
            </div>
        )
    }
}

export {ClassState}