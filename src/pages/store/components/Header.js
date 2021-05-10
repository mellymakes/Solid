import React from 'react'
import {arrow, materials} from '../../../img'
import './scss/header.scss'

export default function Header() {
    return (
        <div className="msh" style={{backgroundImage: `url(${materials})`}}>
            <div className="msh__img-overlay"></div>
        <div className="con-90-res msh__text">
            <h1>BUY BEST MATERIALS HERE</h1>
            <h3>Secure payment and fast delivery</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce interdum et sem sit amet pharetra. Phasellus quis aliquet arcu, sit amet imperdiet massa. Nunc erat tortor, dapibus eu libero nec, malesuada faucibus neque. Fusce consectetur mi vitae ante luctus, ac consectetur urna vestibulum. Sed non augue nisl. Nulla facilisi. Sed ut tristique arcu. Aliquam ac arcu at magna pellentesque posuere in a risus. Donec suscipit neque mauris, gravida imperdiet dolor ullamcorper a. Integer rhoncus felis sapien. Quisque id sagittis dui..
            </p>

            <a href="#cardsects"><div className="arrowdownb">{arrow}</div></a>

        </div>

        </div>
    )
}
