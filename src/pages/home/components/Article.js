import React from 'react'
import {wooden, arrow} from '../../../img'
import './scss/article.scss'

export default function Article() {
    return (
        <div className="mha">
            <div className="con-90-res">
                <div className="ab ab__grid-right">
                    <div className="ab__img">
                        <img src={wooden} alt="" srcset=""/>
                    </div>
                    <div className="ab__texts">
                        <div className="ab__title"><h1>Best Material in the world</h1></div>
                        <div className="ab__text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                            <button className="abb"><span className="abb__text">Buy Now</span><span className="abb__svg">{arrow}</span></button>
                        </div>
                    </div>              
                </div>
                <div className="ab ab__grid-left">
                    <div className="ab__img">
                        <img src={wooden} alt="" srcset=""/>
                    </div>
                    <div className="ab__texts">
                        <div className="ab__title"><h1>Best Material in the world</h1></div>
                        <div className="ab__text">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially </p>
                            <button className="abb"><span className="abb__text">Buy Now</span><span className="abb__svg">{arrow}</span></button>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    )
}
