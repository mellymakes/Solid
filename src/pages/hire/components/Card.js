import React from 'react'
import {checkmark} from '../../../img'

export default function Card({obj}) {

    const {name, requ, price} = obj

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <div className="mhcc">
  
            <div className="mhcc__title">
                <h2>{name.toUpperCase()}</h2>
            </div>
            <div className="mhcc__grid">
                {requ.map(data => {
                    return (

                    <div className="mhcc__sect">
                        <p>{data.dr}</p>
                        {data.check ? checkmark : ''}
                    </div>

                )
                })}
            </div>
            <div className="mhcc__bottom">
                <p>{numberWithCommas(price)}/ Worker</p>
                <button className="red-button">Purchase now</button>
            </div>
        </div>
    )
}
