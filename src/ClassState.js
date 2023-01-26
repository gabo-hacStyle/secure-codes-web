import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{
    //Construyendo los estados con this.state
    constructor(props){
        super(props);
        this.state = {
            err: false,
            value: '',
            loading: false,
            confirmation: false,
            deleted: false
        }
    }
    
    //Ciclo de vida donde se actualiza
    componentDidUpdate() {
        if(this.state.loading){
            setTimeout(() => {
                if (SECURITY_CODE === this.state.value){
                    this.setState({
                        err: false, 
                        loading:false,
                        confirmation: true
                    })
                } else {
                    this.setState({
                        err: true,
                        loading: false
                    })
                }
            }, 2000)
    }
    }   
    render(){
        const {err, loading, value, deleted, confirmation} = this.state;
        if(!deleted && !confirmation) {
            return(
                <div>
                    <h2>Usando {this.props.name}</h2>
                    <p>Manejo del estado de forma imperativa compuesta</p>
                    
                    {(err && !loading) && ( 
                    <p>Error: Clave incorrecta</p>
                    )}
                    
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
                    > Comprobar
                    </button>
                </div>
            )
        } else if (confirmation && !deleted) {
            return(
                <React.Fragment>
                <p>¿Quieres elminarlo?</p>

                <button
                    onClick={() => {
                        this.setState({
                            confirmation: false,
                            deleted: true
                        })
                    }}
                > 
                SI
                </button>
                <button 
                    onClick={() => {
                        this.setState({
                            deleted: false,
                            confirmation: false,
                            value: ''
                        })
                    }}
                > 
                NO
                </button>
            </React.Fragment>  
            )
        } else {
            return(
                <React.Fragment>
                    <p>Se elmino con exito </p>
                    <button
                        onClick={() => {
                            this.setState({
                                value: '',
                                deleted: false,
                            })  
                        }}
                    >
                    Resetear
                    </button>
                </React.Fragment> 
            )
        }
        
    }
}

export {ClassState}