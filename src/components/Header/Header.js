import React from 'react'
import headelogo from '../../images/corona.svg'

function Header() {
    return (
        <header className="App-header">
            <div className="glow">
                COVID-19
            <img src={headelogo} className="App-logo" alt="logo" />
                TRACKER
            </div>
        </header>
    )
}

export default Header