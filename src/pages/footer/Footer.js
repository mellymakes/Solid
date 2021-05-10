import React from 'react'
import {twitter, facebook, insta} from '../../img'
import {Link} from 'react-router-dom'
import logo from '../../imgFunction/logo'
import './footer.scss'

export default function Footer({lightState}) {
    

    return (
        <div className="mf">
            {/* main-footer */}

            <div className="con-90-res">




            <div className="mf__logo">
                <img src={logo(lightState)} alt="" srcset=""/>
            </div>

            <div className="mfsoscm">

                <div className="mfsoscm__grid">
                    <div className="mfsoscm__box">
                        <div className="mfsoscm__ball fb">
                            {facebook}
                        </div>
                    </div>
                    <div className="mfsoscm__box">
                        <div className="mfsoscm__ball">
                        {insta}
                        </div>
                    </div>
                    <div className="mfsoscm__box">
                        <div className="mfsoscm__ball">
                            {twitter}
                        </div>
                    </div>
                </div>

            </div>

            <div className="mf__nav">
                <Link to="/">Home</Link>
                <Link to="/hire">Hire</Link>
                <Link to="/store">Store</Link>
                <Link to="/teams">Teams</Link>
                <Link to="/aboutus">About</Link>
            </div>

            <div className="mf__bottom">
                <p>all Copyright reserved &copy; Webpage Melly</p>
            </div>

            </div>


           
        </div>
    )
}
