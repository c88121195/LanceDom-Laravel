import React from 'react'

function Container({ children }) {
    return (
        <div className="container">
            <div className="mainContent">
                {children}
            </div>
            <div className="space"></div>
        </div>
    )
}

export default Container