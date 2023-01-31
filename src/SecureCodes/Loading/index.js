import React from "react";

//This component only works for the ClassState part 

class Loading extends React.Component {

    componentWillUnmount(){
        console.log('Component will unmount')
    }
    render(){
        return(
            <p> Cargando...</p>
        )
    }
}
export {Loading}