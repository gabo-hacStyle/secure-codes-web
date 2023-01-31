import React from "react";
import './index.css'

function SecureCodes ({children}) {
    return(
        <section className="secureCodes">
            {children}
        </section>
    )
}

export { SecureCodes }