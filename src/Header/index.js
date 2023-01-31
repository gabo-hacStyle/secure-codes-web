import React from "react";
import './styles.css'

function Header ({ children }) {
    return ( 
        <header className="Header">
            {children}
        </header>  
    )
}

export {Header}