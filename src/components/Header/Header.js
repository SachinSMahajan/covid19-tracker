import React from 'react'
import headelogo from '../../images/corona.svg'

function Header() {
    return (
        <header className="App-header">
            <img src={headelogo} className="App-logo" alt="logo" />
        </header>
    )
}

export default Header