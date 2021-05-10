import React from 'react'
import {buildings} from '../../../img'
import './scss/header.scss'

export default function Header() {
    return (
        <div className="mah" style={{backgroundImage: `url('${buildings}')`}}>

        <div className="mah__overlay"></div>
        <div className="con-90-res mah__text">
            <h1>PURPOSE AND BACKSTORY<br/>OF<br/><span>TEAM SOLID</span></h1>

        </div>
    </div>
    )
}
