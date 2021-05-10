import React, {useState, useEffect} from 'react'
import {arrow} from '../../../img'
import getImg from '../../../imgFunction/getImg'
import Loading from '../../Loading'
import './scss/team.scss'

export default function Team() {

    
    const [isLoading, setLoading] = useState(false)

    const [mData, setMData] = useState([])

    const [activeObj, setActiveObj] = useState({})

    const [m, setM] = useState({})

    const [screen, setScreen] = useState(null)

    const [dropdown, setDropdown] = useState(false)



    const fetching =  async (link) =>{
        setLoading(true)


        const ddd = await fetch(link).then(ddd => ddd.json()).then(ddd => ddd)

        const mData = ddd.map((d, i) => {
            return i === 0 ? {...d, active: true} : {...d, actuve: false}
        })

        setMData(mData)

        setActiveObj(mData[0])

        setLoading(false)



    }
    const refetch =  async (link) =>{
      

        const ddd = await fetch(link).then(ddd => ddd.json()).then(ddd => ddd)

        const mData = ddd.map((d, i) => {
            return i === 0 ? {...d, active: true} : {...d, actuve: false}
        })

        setLoading(false)

        setActiveObj(mData[0])

        setMData(mData)

    }

    useEffect(() =>{
        
        setScreen(window.innerWidth)

        fetching('http://localhost:9999/teams')
    }, [])

    useEffect(() =>{

        if(isLoading === false){return }

        const inter = setInterval(() =>{
            refetch('http://localhost:9999/teams')
        }, 1000)

        return () =>{
            clearInterval(inter)
        }
    }, )

    window.addEventListener('resize', () => setScreen(window.innerWidth))

    function menuClickEv(e){

        const { pos } = e.target.dataset
        const posObj = mData.find(obj => obj.position === pos)
        const { classList } = e.target

        const {offsetLeft, offsetWidth} = e.target
        
        
        if(classList.contains('mttmd__op')){
            setDropdown(false)

            
        }

        setActiveObj(posObj)

        const newarr = mData.map(dat => {
            return dat.position === pos ? {...dat, active: true} : {...dat, active: false}
        })

        setM({l: offsetLeft, w: offsetWidth})

        setMData(newarr)

        // console.log(posObj);

    }

    function mmEv(){
        if(screen > 840){ return }

        setDropdown(!dropdown)
    }

    
    window.addEventListener('DOMContentLoaded', () => {
        const activeMenuEl = document.querySelector('.mttm__marker')

        // console.log(activeMenuEl);

    })


    const menuData = mData.map(d => {
        
        return (
            <div 

                key={d.id} 
                className={d.active ? "mttm__op mttm__active" : "mttm__op"} 
                data-pos={d.position} 
                onClick={menuClickEv}

            >
                
                <h2>{d.position}</h2>

            </div>
        )
    })
    const menuDataD = mData.map(d => {
        
        return (
            <div 

                key={d.id} 
                className={d.active ? "mttmd__op mttmd__active" : "mttmd__op"} 
                data-pos={d.position} 
                onClick={menuClickEv}

            >
                
                <h2>{d.position}</h2>

            </div>
        )
    })

    const arrowClass = dropdown ? "mttm__arrow mttm__arrow--active" : "mttm__arrow"
    
    const dropdownClass = dropdown ? "mttmd mttmd--active" : "mttmd"

    const {l, w} = m

    const {img, position, fposition, text} = activeObj.img !== undefined ? activeObj : {position: 'none', img: 'none', position: 'none', fposition: 'none', text: "none"}

    // console.log(img);

    return (
    <div className="mtt">
            <Loading name="Teams" active={isLoading}/>
            <div className="con-90-res" style={{position: 'relative'}}>

                <div className="mttm" onClick={mmEv}>
                   {menuData}
                    <div className="mttm__marker" style={{left: `${l}px`, width: `${w}px`}}></div>
                    <div className={arrowClass}>{arrow}</div>
                </div>
                <div className={dropdownClass}>
                    <div className="mttmd__i">
                        {menuDataD}
                    </div>
                </div>


                <div className="mtd">
                    <div className="mtd__img" style={{backgroundImage: `url('${getImg(img)}')`}}></div>
                    <div className="mtd__texts">
                        <h1>{position}</h1>
                        <h3>{fposition}</h3>
                        <p>{text}</p>
                    </div>
                </div>

            </div>
    </div>
    )
}
