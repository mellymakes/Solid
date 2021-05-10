import React from 'react'
import shovel from 'C:/Coding/xd to web/solid/src/imgFunction/simg/shovel.jpg'
import getImg from '../../../imgFunction/getImg'




export default function Card({object}) {

    const {name, price, img} = object

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }

    return (
        <div className="mscic" id="cardsects">

            <div className="mscic__img" style={{backgroundImage: `url('${getImg(img)}')`}}></div>
            <div className="mscic__desc">
                <p>{name}</p>
                <h3>{numberWithCommas(price)}RP</h3>
                <button>Buy Now</button>
            </div>
            
        </div>
    )
}
