import React from 'react'
import {teams} from '../../../img'
import './scss/header.scss'

export default function Header() {
    return (
    <div className="mth" style={{backgroundImage: `url('${teams}')`}}>

        <div className="mth__overlay"></div>
        <div className="con-90-res mth__text">
            <h1>BEHIND A SUCCESFULL COMPANY<br/>THERE'S ALWAYS A<br/><span>TEAM</span></h1>

        </div>
    </div>
    )
}
