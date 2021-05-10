import React, {useState, useEffect} from 'react'
import Loading from '../../Loading'
import Card from './Card'
import './scss/cards.scss'


export default function Cards() {

    const [items, setItems] = useState([])
    
    const [isLoading, setLoading] = useState(false)


    async function fetching(link){
        setLoading(true)

        const data = await fetch(link).then(ddd => ddd.json()).then(ddd => ddd)

        setItems(data)

        setLoading(false)
    }

    async function refetch(link){

        const data = await fetch(link).then(ddd => ddd.json()).then(ddd => ddd)

        setItems(data)

        setLoading(false)
    }


    useEffect(() =>{
        fetching('http://localhost:9999/store')
    }, [])

    useEffect(() =>{
     
        if(!isLoading){return}

        const inter = setInterval(() => {refetch('http://localhost:9999/store')}, 1000)

        return () =>{
            clearInterval(inter)
        }

    })


    const cardSets = items.map(d => <Card object={d}/>)

    return (
        <div className="msc">
          <Loading name="items" active={isLoading}/>
            <div className="con-90-res">
                <div className="msci">
                    {cardSets}
                </div>
            </div>
        </div>
    )
}
