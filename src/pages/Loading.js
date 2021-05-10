import React from 'react'
// import {css, jsx} from '@emotion/react'
import './loading.scss'

export default function Loading({name, active}) {


   


    return (
        <div
         className="lscreen"
         style={active ? {opacity: '1'}: {opacity: '0', pointerEvents: 'none'}}
        >
            <h1 >Loading {name}</h1>
        </div>
    )
}
