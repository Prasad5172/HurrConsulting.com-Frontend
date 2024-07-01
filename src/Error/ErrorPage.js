import React, { useEffect } from 'react'
import "./ErrorPage.css"
import { useNavigate } from 'react-router-dom'
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='error-page'>
                <div className='error-page-body'>
                    <div className="image">

                        <img src="" alt="LawfirmLogo" />
                    </div>
                    <div className='text'>
                        <h1>Page not found</h1>
                    </div>
                    <div className='loading'>
                        <p>We can’t seem to find the page you are looking for</p>
                    `</div>
                    <div className="button-link">
                        <button className='Home-button' onClick={() => navigate("/")}>Home</button>
                        <br/>
                        
                    </div>
                    <div className="anchor"><a href="#">Help</a></div>
                    </div>
            </div>

        </>
    )
}


export default ErrorPage;