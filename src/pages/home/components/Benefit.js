import React from 'react'
import {workerConstruction, securePayment, truck} from '../../../img'
import './scss/benefit.scss'

export default function Benefit() {
    return (
        <div className="mhb">
            <div className="con-90-res mhb__grid">
                <div className="mhb__box">
                    <div className="mhb__svg">{workerConstruction}</div>
                    <div className="mhb__boxtitle"><h3>Fast Workers</h3></div>
                    <div className="mhb__box-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
                <div className="mhb__box">
                    <div className="mhb__svg">{truck}</div>
                    <div className="mhb__boxtitle"><h3>Best Material</h3></div>
                    <div className="mhb__box-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
                <div className="mhb__box">
                    <div className="mhb__svg">{securePayment}</div>
                    <div className="mhb__boxtitle"><h3>Secure Payment</h3></div>
                    <div className="mhb__box-desc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    </div>
                </div>
            </div>
        </div>
    )
}
