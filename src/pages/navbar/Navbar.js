import React, {useState} from 'react'
import {sun, moon} from '../../img'
import {NavLink} from 'react-router-dom'
import logo from 'C:/Coding/xd to web/solid/src/imgFunction/logo'
import getBurger from '../../imgFunction/burger'
import './navbar.scss'

export default function Navbar({lightState, setLight}) {


    const [markerObj, setMarkerObj] = useState({})

    const [dropdown, setDropdown] = useState(false)
  


    window.addEventListener('DOMContentLoaded', () =>{
        const ndList =  document.querySelectorAll('.ni__link')

        let element = '' ;

        for(let i = 0; i < ndList.length; i++){
            let el = ndList[i]

            if(el.classList[1] === 'ni__underlineActive'){
                element = el 
            }else{
                
            }
        }

        const {offsetLeft, offsetWidth} = element

        setMarkerObj({l: offsetLeft, w: offsetWidth})



    })
    


    const lightThemeButtonClassList = lightState === true ? "ni__theme-switch ni__nts-active" : "ni__theme-switch"

    const darkThemeButtonClassList = lightState === false ? "ni__theme-switch ni__nts-active" : "ni__theme-switch"

    const dllightThemeButtonClassList = lightState === true ? "dl__theme-switch dl__nts-active" : "dl__theme-switch"

    const dldarkThemeButtonClassList = lightState === false ? "dl__theme-switch dl__nts-active" : "dl__theme-switch"

    const dlClass = dropdown ? 'dl dl__active' : 'dl'

    function themeEv(e){

        const {thm} = e.target.dataset
        console.log(lightState);
        setLight(thm)

    }

    function hoverEffect(e){
        
        const {offsetLeft, offsetWidth} = e.target

        setMarkerObj({l: offsetLeft, w: offsetWidth})

    }

    function settingDropdown(){
        setDropdown(!dropdown)
    }

    const {l, w} = markerObj



    return (
        <>
        <nav>
           <div className="con-90-res">
               <div className="ni">
                   <div className="ni__logo">
                        <img src={logo(lightState)} alt="" srcset=""/>
                   </div>
                   <div className="ni__outer-links">
                    <div className="ni__links">
                        <NavLink exact activeClassName="ni__underlineActive" onClick={hoverEffect} to="/" className="ni__link">Home</NavLink>
                        <NavLink activeClassName="ni__underlineActive" onClick={hoverEffect} to="/hire" className="ni__link">Hire</NavLink>
                        <NavLink activeClassName="ni__underlineActive" onClick={hoverEffect} to="/store" className="ni__link">Store</NavLink>
                        <NavLink activeClassName="ni__underlineActive" onClick={hoverEffect} to="/teams" className="ni__link">Teams</NavLink>
                        <NavLink activeClassName="ni__underlineActive" onClick={hoverEffect} to="/aboutus" className="ni__link">About us</NavLink>
                        <div className="ni__marker" style={{width: w, left: l}} ></div>
                        {/* style={{width: w, left: l}} */}
                    </div>
                   </div>
                   <div className="ni__theme-switches">
                       {/* svg clickers lmao  */}
                       <button onClick={themeEv} data-thm="light" className={lightThemeButtonClassList}>
                           {sun}
                       </button>
                       <button onClick={themeEv} data-thm="dark" className={darkThemeButtonClassList}>
                           {moon}
                       </button>
                   </div>
                   <div className="ni__burger">
                       <img onClick={settingDropdown} src={getBurger(lightState)} alt="" srcset=""/>
                   </div>
               </div>
           </div>
        </nav>
        <div className={dlClass}>
            <NavLink exact activeClassName="dl__underlineActive" onClick={hoverEffect} to="/" className="dl__link">Home</NavLink>
            <NavLink activeClassName="dl__underlineActive" onClick={hoverEffect} to="/hire" className="dl__link">Hire</NavLink>
            <NavLink activeClassName="dl__underlineActive" onClick={hoverEffect} to="/store" className="dl__link">Store</NavLink>
            <NavLink activeClassName="dl__underlineActive" onClick={hoverEffect} to="/teams" className="dl__link">Teams</NavLink>
            <NavLink activeClassName="dl__underlineActive" onClick={hoverEffect} to="/aboutus" className="dl__link">About us</NavLink>
            <div className="dl__theme-switches">
                <button onClick={themeEv} data-thm="light" className={dllightThemeButtonClassList}>
                    {sun}
                </button>
                <button onClick={themeEv} data-thm="dark" className={dldarkThemeButtonClassList}>
                    {moon}
                </button>
            </div>
        </div>
        </>
    )
}
