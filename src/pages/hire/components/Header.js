import React from 'react'
import {worker, arrow} from '../../../img'
import './scss/header.scss'

export default function Header() {
    return (
        <div className="mhih" style={{backgroundImage: `url(${worker})`}}>
        
        <div className="mhih__img-overlay"></div>
        <div className="con-90-res mhih__text">
            <h1>CHOOSE YOUR BUILDING PLAN</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum et sem sit amet pharetra. Phasellus quis aliquet arcu, sit amet imperdiet massa. Nunc erat tortor, dapibus eu libero nec, malesuada faucibus neque. Fusce consectetur mi vitae ante luctus, ac consectetur urna vestibulum. Sed non augue nisl. Nulla facilisi. Sed ut tristique arcu. Aliquam ac arcu at magna pellentesque posuere in a risus. Donec suscipit neque mauris, gravida imperdiet dolor ullamcorper a. Integer rhoncus felis sapien. Quisque id sagittis dui..
            </p>

            <a href="#cardsect"><div className="arrowdownb">{arrow}</div></a>

        </div>
    </div>
    )
}
