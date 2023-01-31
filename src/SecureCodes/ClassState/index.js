import React from "react";
import '../Styles/styles.css'

//Loading: Un componente aparte 
import { Loading } from "../Loading";

//Código de seguridad 
const SECURITY_CODE = 'paradigma';

class ClassState extends React.Component{
    //Construyendo los estados con this.state
    constructor(props){
    //Para traer de la clase React.Component sus propiedades
        super(props);
    //Estados
        this.state = {
            err: false,
            value: '',
            loading: false,
            confirmation: false,
            deleted: false
        }
    }
    
    //Ciclo de vida donde se actualiza
    //Esto se hace en vez del effect
    componentDidUpdate() {
        if(this.state.loading){
            //timeout para simular una llamada al backend
            setTimeout(() => {
                //Sí el código está bien
                if (SECURITY_CODE === this.state.value){
                    this.setState({
                        err: false, 
                        loading:false,
                        confirmation: true
                    })
                } else {
                    //Sí el codigo está mal
                    this.setState({
                        err: true,
                        loading: false
                    })
                }
            }, 2000)
        }
    } 
    //Renderiza 3 diferentes ventanas:
    //La inicial, la de confirmación y la eliminada con éxito
    render(){
        const {err, loading, value, deleted, confirmation} = this.state;
        if(!deleted && !confirmation) {
            return(
                <div className="state-container">
                    <h2 className="state-title">Usando {this.props.name}</h2>
                    <p>Manejo del estado de forma imperativa compuesta</p>
                    
                    {(err && !loading) && ( 
                    <p>Error: Clave incorrecta</p>
                    )}
                    
                    {(loading && 
                        <Loading /> 
                    )}
                            
                    <input
                        className="state-input"
                        value={value}
                        onChange={(event) => {
                            this.setState({value: event.target.value})
                        }}
                        placeholder="Codigo" 
                    />
                    <button 
                        className="state-button--check"
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