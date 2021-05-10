import React from 'react'
import {worker, materials} from '../../../img'
import './scss/menu.scss'

export default function Menu() {
    return (
        <div className="mhm">
            <h1 className="mhm__title">WHAT DO YOU WANT TO DO?</h1>
            <div className="con-90-res mhm__grid">
                <div className="mhm__flex">
                    <div className="mhm__box" style={{backgroundImage: `url(${worker})`}}>
                        <div className="mhm__box-overlay">
                            <div className="mhm__box-title">
                                Hire a <br/>builder
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mhm__flex">
                    <div className="mhm__box" style={{backgroundImage: `url(${materials})`}}>
                        <div className="mhm__box-overlay">
                            <div className="mhm__box-title">
                                buy <br/>materials
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
