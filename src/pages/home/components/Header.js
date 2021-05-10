import React from 'react'
import {vid} from '../../../img'
import './scss/header.scss'

export default function Header() {

    // window.addEventListener('DOMContentLoaded', () =>  )

    return (
        <div className="mhh">
            <video autoPlay muted loop>

                <source id="vid" src={vid} />

            </video>
            <div className="mhh__video-overlay"></div>
            <div className="con-90-res mhh__text">
                <h1>WE BUILD<br/>YOUR<br/><span>DREAM HOUSES</span></h1>
                <p>
                   You can sit back and relax while we make your dream house comes true<br/>
                   we offer the best service
                </p>

                <button>Hire</button>

            </div>
        </div>
    )
}
