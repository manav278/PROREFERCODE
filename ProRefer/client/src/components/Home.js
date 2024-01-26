import React from 'react'
import {useLocation} from 'react-router-dom';
export default function Home() {
    const location=useLocation();
    return (
        <div>
            <div className="homepage">

                <h1 style={{color:'white'}}>Hello {location.state.id} and welcome to the home</h1>

            </div>
        </div>
    )
}
