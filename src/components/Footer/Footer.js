import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer-container">
            <span className="">Created by <a href="https://github.com/SachinSMahajan" target="_blank" rel="noopener noreferrer" >
                Sachin S Mahajan
                </a>
            </span>
            <span className="">Data API <span> </span>
                <a href="https://github.com/mathdroid/covid-19-api" target="_blank" rel="noopener noreferrer" >
                    Mathdroid
                </a><span> | </span>
                <a href="https://currentsapi.services/en" target="_blank" rel="noopener noreferrer" >
                    NewsAPI
                </a>
            </span>
        </div>
    )
}

export default Footer
